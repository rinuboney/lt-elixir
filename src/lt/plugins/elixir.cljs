(ns lt.plugins.elixir
  (:require [lt.object :as object]
            [lt.objs.eval :as eval]
            [lt.objs.console :as console]
            [lt.objs.command :as cmd]
            [lt.objs.clients.tcp :as tcp]
            [lt.objs.sidebar.clients :as scl]
            [lt.objs.dialogs :as dialogs]
            [lt.objs.files :as files]
            [lt.objs.popup :as popup]
            [lt.objs.platform :as platform]
            [lt.objs.editor :as ed]
            [lt.objs.plugins :as plugins]
            [lt.plugins.watches :as watches]
            [lt.objs.proc :as proc]
            [clojure.string :as string]
            [lt.objs.clients :as clients]
            [lt.objs.notifos :as notifos]
            [lt.util.load :as load]
            [lt.util.cljs :refer [js->clj]])
  (:require-macros [lt.macros :refer [defui behavior]]))

;;****************************************************
;; Proc
;;****************************************************

(def shell (load/node-module "shelljs"))
(def ex-path (files/join plugins/*plugin-dir* "ex-src/main.exs"))

(behavior ::on-out
                  :triggers #{:proc.out}
                  :reaction (fn [this data]
                              (let [out (.toString data)]
                                (object/update! this [:buffer] str out)
                                (when (> (.indexOf out "Connected") -1)
                                  (do
                                    (notifos/done-working)
                                    (object/merge! this {:connected true})
                                    ;(object/destroy! this)
                                    )))))

(behavior ::on-error
                  :triggers #{:proc.error}
                  :reaction (fn [this data]
                              (let [out (.toString data)]
                                (when-not (> (.indexOf (:buffer @this) "Connected") -1)
                                  (object/update! this [:buffer] str data)
                                  ))
                              ))

(behavior ::on-exit
                  :triggers #{:proc.exit}
                  :reaction (fn [this data]
                              ;(object/update! this [:buffer] str data)
                              (when-not (:connected @this)
                                (notifos/done-working)
                                (popup/popup! {:header "We couldn't connect."
                                               :body [:span "Looks like there was an issue trying to connect
                                                      to the project. Here's what we got:" [:pre (:buffer @this)]]
                                               :buttons [{:label "close"}]})
                                (clients/rem! (:client @this)))
                              (proc/kill-all (:procs @this))
                              (object/destroy! this)
                              ))

(object/object* ::connecting-notifier
                :triggers []
                :behaviors [::on-exit ::on-error ::on-out]
                :init (fn [this client]
                        (object/merge! this {:client client :buffer ""})
                        nil))

(defn escape-spaces [s]
  (if (= files/separator "\\")
    (str "\"" s "\"")
    s))


(defn run-ex [{:keys [path project-path name client] :as info}]
  (let [n (notifos/working "Connecting..")
        obj (object/create ::connecting-notifier client)
        env nil]
    (proc/exec {:command (or (:elixir-exe @elixir) "elixir")
                :args [(escape-spaces ex-path) tcp/port (clients/->id client)]
                :cwd project-path
                :env env
                :obj obj})))

(defn check-elixir [obj]
  (assoc obj :elixir (or (:elixir-exe @elixir)
                         (.which shell "elixir"))))

(defn check-client [obj]
  (assoc obj :elixir-client (files/exists? ex-path)))

(defn find-project [obj]
  (let [p (:path obj)
        roots (files/get-roots)]
    (loop [cur p
           prev ""]
      (if (or (empty? cur)
              (roots cur)
              (= cur prev))
        (assoc obj :project-path nil)
        (if (and (not (files/exists? (files/join cur "mix.exs")))
                 (files/dir? cur))
          (assoc obj :project-path cur)
          (recur (files/parent cur) cur))))))

(defn notify [obj]
  (let [{:keys [elixir project-path path elixir-client client]} obj]
    (cond
     (or (not elixir) (empty? elixir)) (do
                                         (clients/rem! client)
                                         (notifos/done-working)
                                         (popup/popup! {:header "We couldn't find Elixir."
                                                      :body "In order to evaluate in Elixir files, a Elixir interpreter has to be installed and on your system PATH."
                                                      :buttons [{:label "Download Elixir"
                                                                 :action (fn []
                                                                           (platform/open "http://elixir-lang.org/"))}
                                                                {:label "ok"}]}))
     (not project-path) (do
                          (clients/rem! client)
                          (notifos/done-working)
                          (popup/popup! {:header "We couldn't find this file."
                                       :body "In order to evaluate in Elixir files, the file has to be on disk somewhere."
                                       :buttons [{:label "Save this file"
                                                  :action (fn []
                                                            (cmd/exec! :save)
                                                            (try-connect obj))}
                                                 {:label "Cancel"
                                                  :action (fn []
                                                            )}]}))
     :else (do (popup/popup! {:body "Calling run-ex"}) run-ex obj))
    obj))

(defn check-all [obj]
  (-> obj
      (check-elixir)
      (check-client)
      (find-project)
      (notify)))


;;****************************************************
;; Eval
;;****************************************************

(defn try-connect [{:keys [info]}]
  (let [path (:path info)
        client (clients/client! :elixir.client)]
    (check-all {:path path
                :client client})
    client))

(behavior ::on-eval.one
                  :triggers #{:eval.one}
                  :reaction (fn [editor]
                              (let [pos (ed/->cursor editor)
                                    info (:info @editor)
                                    info (if (ed/selection? editor)
                                           (assoc info
                                             :code (ed/selection editor)
                                             :meta {:start (-> (ed/->cursor editor "start") :line)
                                                    :end (-> (ed/->cursor editor "end") :line)})
                                           (js/alert "make a selection."))]
                                (object/raise elixir :eval! {:origin editor
                                                    :info info}))))
(behavior ::elixir-watch
                  :triggers #{:editor.eval.elixir.watch}
                  :reaction (fn [editor res]
                              (when-let [watch (get (:watches @editor) (-> res :meta :id))]
                                (let [str-result (:result res)]
                                  (object/raise (:inline-result watch) :update! str-result)))))

(behavior ::elixir-result
                  :triggers #{:editor.eval.elixir.result}
                  :reaction (fn [editor res]
                              (notifos/done-working)
                              (object/raise editor :editor.result (:result res) {:line (:end (:meta res))
                                                                                 :start-line (-> res :meta :start)})))

(behavior ::elixir-success
                  :triggers #{:editor.eval.elixir.success}
                  :reaction (fn [editor res]
                              (notifos/done-working)
                              (object/raise editor :editor.result "✓" {:line (-> res :meta :end)
                                                                       :start-line (-> res :meta :start)})))

(behavior ::elixir-exception
                  :triggers #{:editor.eval.elixir.exception}
                  :reaction (fn [editor ex]
                              (notifos/done-working)
                              (object/raise editor :editor.exception (:ex ex) {:line (-> ex :meta :end)
                                                                               :start-line (-> ex :meta :start)})
                              ))

(behavior ::eval!
                  :triggers #{:eval!}
                  :reaction (fn [this event]
                              (let [{:keys [info origin]} event
                                    client (-> @origin :client :default)]
                                (notifos/working "")
                                (clients/send (eval/get-client! {:command :editor.eval.elixir
                                                                 :origin origin
                                                                 :info info
                                                                 :create try-connect})
                                              :editor.eval.elixir
                                              info
                                              :only
                                              origin))))

(behavior ::connect
                  :triggers #{:connect}
                  :reaction (fn [this path]
                              (try-connect {:info {:path path}})))

(object/object* ::elixir-lang
                :tags #{:elixir.lang})

(def elixir (object/create ::elixir-lang))

(scl/add-connector {:name "Elixir"
                    :desc "Select a directory to serve as the root of your elixir project."
                    :connect (fn []
                               (dialogs/dir elixir :connect))})

(behavior ::elixir-exe
                  :triggers #{:object.instant}
                  :desc "Elixir: Set the path to the Elixir executable"
                  :type :user
                  :params [{:label "path"
                            :type :path}]
                  :exclusive true
                  :reaction (fn [this exe]
                              (object/merge! elixir {:elixir-exe exe})))
