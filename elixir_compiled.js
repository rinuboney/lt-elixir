if(!lt.util.load.provided_QMARK_('lt.plugins.elixir')) {
goog.provide('lt.plugins.elixir');
goog.require('cljs.core');
goog.require('lt.util.cljs');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.objs.platform');
goog.require('lt.objs.popup');
goog.require('lt.objs.dialogs');
goog.require('lt.objs.popup');
goog.require('lt.objs.notifos');
goog.require('lt.objs.proc');
goog.require('lt.objs.notifos');
goog.require('clojure.string');
goog.require('lt.util.cljs');
goog.require('lt.objs.command');
goog.require('lt.objs.platform');
goog.require('lt.objs.files');
goog.require('lt.objs.clients.tcp');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.plugins');
goog.require('lt.plugins.watches');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.clients.tcp');
goog.require('lt.util.load');
goog.require('clojure.string');
goog.require('lt.plugins.watches');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.dialogs');
goog.require('lt.util.load');
goog.require('lt.objs.console');
goog.require('lt.objs.proc');
goog.require('lt.objs.console');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
lt.plugins.elixir.shell = lt.util.load.node_module.call(null,"shelljs");
lt.plugins.elixir.ex_path = lt.objs.files.join.call(null,lt.objs.plugins._STAR_plugin_dir_STAR_,"ex-src/main.exs");
lt.plugins.elixir.__BEH__on_out = (function __BEH__on_out(this$,data){var out = data.toString();lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",3930752946)], null),cljs.core.str,out);
if((out.indexOf("Connected") > -1))
{lt.objs.notifos.done_working.call(null);
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connected","connected",4729661051),true], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elixir","on-out","lt.plugins.elixir/on-out",1429963807),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elixir.__BEH__on_out,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));
lt.plugins.elixir.__BEH__on_error = (function __BEH__on_error(this$,data){var out = data.toString();if((new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)).indexOf("Connected") > -1))
{return null;
} else
{return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",3930752946)], null),cljs.core.str,data);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elixir","on-error","lt.plugins.elixir/on-error",2720865781),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elixir.__BEH__on_error,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.error","proc.error",4143512802),null], null), null));
lt.plugins.elixir.__BEH__on_exit = (function __BEH__on_exit(this$,data){if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{} else
{lt.objs.notifos.done_working.call(null);
lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"We couldn't connect.",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),"Looks like there was an issue trying to connect\n                                                      to the project. Here's what we got:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))], null)], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"close"], null)], null)], null));
lt.objs.clients.rem_BANG_.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
}
lt.objs.proc.kill_all.call(null,new cljs.core.Keyword(null,"procs","procs",1120844623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
return lt.object.destroy_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elixir","on-exit","lt.plugins.elixir/on-exit",941092395),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elixir.__BEH__on_exit,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.exit","proc.exit",4162906152),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elixir","connecting-notifier","lt.plugins.elixir/connecting-notifier",2778145628),new cljs.core.Keyword(null,"triggers","triggers",2516997421),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.elixir","on-exit","lt.plugins.elixir/on-exit",941092395),new cljs.core.Keyword("lt.plugins.elixir","on-error","lt.plugins.elixir/on-error",2720865781),new cljs.core.Keyword("lt.plugins.elixir","on-out","lt.plugins.elixir/on-out",1429963807)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,client){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",3951159101),client,new cljs.core.Keyword(null,"buffer","buffer",3930752946),""], null));
return null;
}));
lt.plugins.elixir.escape_spaces = (function escape_spaces(s){if(cljs.core._EQ_.call(null,lt.objs.files.separator,"\\"))
{return [cljs.core.str("\""),cljs.core.str(s),cljs.core.str("\"")].join('');
} else
{return s;
}
});
lt.plugins.elixir.run_ex = (function run_ex(p__8203){var map__8205 = p__8203;var map__8205__$1 = ((cljs.core.seq_QMARK_.call(null,map__8205))?cljs.core.apply.call(null,cljs.core.hash_map,map__8205):map__8205);var info = map__8205__$1;var client = cljs.core.get.call(null,map__8205__$1,new cljs.core.Keyword(null,"client","client",3951159101));var name = cljs.core.get.call(null,map__8205__$1,new cljs.core.Keyword(null,"name","name",1017277949));var project_path = cljs.core.get.call(null,map__8205__$1,new cljs.core.Keyword(null,"project-path","project-path",1907176907));var path = cljs.core.get.call(null,map__8205__$1,new cljs.core.Keyword(null,"path","path",1017337751));var n = lt.objs.notifos.working.call(null,"Connecting..");var obj = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.elixir","connecting-notifier","lt.plugins.elixir/connecting-notifier",2778145628),client);var env = null;return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"command","command",1964298941),(function (){var or__6757__auto__ = new cljs.core.Keyword(null,"elixir-exe","elixir-exe",1259857526).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elixir.elixir));if(cljs.core.truth_(or__6757__auto__))
{return or__6757__auto__;
} else
{return "elixir";
}
})(),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.elixir.escape_spaces.call(null,lt.plugins.elixir.ex_path),lt.objs.clients.tcp.port,lt.objs.clients.__GT_id.call(null,client)], null),new cljs.core.Keyword(null,"cwd","cwd",1014003170),project_path,new cljs.core.Keyword(null,"env","env",1014004831),env,new cljs.core.Keyword(null,"obj","obj",1014014057),obj], null));
});
lt.plugins.elixir.check_elixir = (function check_elixir(obj){return cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"elixir","elixir",4008435505),(function (){var or__6757__auto__ = new cljs.core.Keyword(null,"elixir-exe","elixir-exe",1259857526).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.elixir.elixir));if(cljs.core.truth_(or__6757__auto__))
{return or__6757__auto__;
} else
{return lt.plugins.elixir.shell.which("elixir");
}
})());
});
lt.plugins.elixir.check_client = (function check_client(obj){return cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"elixir-client","elixir-client",925860107),lt.objs.files.exists_QMARK_.call(null,lt.plugins.elixir.ex_path));
});
lt.plugins.elixir.find_project = (function find_project(obj){var p = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(obj);var roots = lt.objs.files.get_roots.call(null);var cur = p;var prev = "";while(true){
if(cljs.core.truth_((function (){var or__6757__auto__ = cljs.core.empty_QMARK_.call(null,cur);if(or__6757__auto__)
{return or__6757__auto__;
} else
{var or__6757__auto____$1 = roots.call(null,cur);if(cljs.core.truth_(or__6757__auto____$1))
{return or__6757__auto____$1;
} else
{return cljs.core._EQ_.call(null,cur,prev);
}
}
})()))
{return cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"project-path","project-path",1907176907),null);
} else
{if(cljs.core.truth_((function (){var and__6745__auto__ = cljs.core.not.call(null,lt.objs.files.exists_QMARK_.call(null,lt.objs.files.join.call(null,cur,"mix.exs")));if(and__6745__auto__)
{return lt.objs.files.dir_QMARK_.call(null,cur);
} else
{return and__6745__auto__;
}
})()))
{return cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"project-path","project-path",1907176907),cur);
} else
{{
var G__8223 = lt.objs.files.parent.call(null,cur);
var G__8224 = cur;
cur = G__8223;
prev = G__8224;
continue;
}
}
}
break;
}
});
lt.plugins.elixir.notify = (function notify(obj){var map__8207 = obj;var map__8207__$1 = ((cljs.core.seq_QMARK_.call(null,map__8207))?cljs.core.apply.call(null,cljs.core.hash_map,map__8207):map__8207);var client = cljs.core.get.call(null,map__8207__$1,new cljs.core.Keyword(null,"client","client",3951159101));var elixir_client = cljs.core.get.call(null,map__8207__$1,new cljs.core.Keyword(null,"elixir-client","elixir-client",925860107));var path = cljs.core.get.call(null,map__8207__$1,new cljs.core.Keyword(null,"path","path",1017337751));var project_path = cljs.core.get.call(null,map__8207__$1,new cljs.core.Keyword(null,"project-path","project-path",1907176907));var elixir = cljs.core.get.call(null,map__8207__$1,new cljs.core.Keyword(null,"elixir","elixir",4008435505));if((cljs.core.not.call(null,elixir)) || (cljs.core.empty_QMARK_.call(null,elixir)))
{lt.objs.clients.rem_BANG_.call(null,client);
lt.objs.notifos.done_working.call(null);
lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"We couldn't find Elixir.",new cljs.core.Keyword(null,"body","body",1016933652),"In order to evaluate in Elixir files, a Elixir interpreter has to be installed and on your system PATH.",new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Download Elixir",new cljs.core.Keyword(null,"action","action",3885920680),(function (){return lt.objs.platform.open.call(null,"http://elixir-lang.org/");
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"ok"], null)], null)], null));
} else
{if(cljs.core.not.call(null,project_path))
{lt.objs.clients.rem_BANG_.call(null,client);
lt.objs.notifos.done_working.call(null);
lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"We couldn't find this file.",new cljs.core.Keyword(null,"body","body",1016933652),"In order to evaluate in Elixir files, the file has to be on disk somewhere.",new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Save this file",new cljs.core.Keyword(null,"action","action",3885920680),(function (){lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"save","save",1017427183));
return lt.plugins.elixir.try_connect.call(null,obj);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Cancel",new cljs.core.Keyword(null,"action","action",3885920680),(function (){return null;
})], null)], null)], null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",1016933652),"Calling run-ex"], null));
} else
{}
}
}
return obj;
});
lt.plugins.elixir.check_all = (function check_all(obj){return lt.plugins.elixir.notify.call(null,lt.plugins.elixir.find_project.call(null,lt.plugins.elixir.check_client.call(null,lt.plugins.elixir.check_elixir.call(null,obj))));
});
lt.plugins.elixir.try_connect = (function try_connect(p__8208){var map__8210 = p__8208;var map__8210__$1 = ((cljs.core.seq_QMARK_.call(null,map__8210))?cljs.core.apply.call(null,cljs.core.hash_map,map__8210):map__8210);var info = cljs.core.get.call(null,map__8210__$1,new cljs.core.Keyword(null,"info","info",1017141280));var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info);var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"elixir.client","elixir.client",1813363788));lt.plugins.elixir.check_all.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"client","client",3951159101),client], null));
return client;
});
lt.plugins.elixir.__BEH__on_eval__DOT__one = (function __BEH__on_eval__DOT__one(editor){var pos = lt.objs.editor.__GT_cursor.call(null,editor);var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));var info__$1 = (cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,editor))?cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.selection.call(null,editor),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,editor,"start")),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,editor,"end"))], null)):alert("make a selection."));return lt.object.raise.call(null,lt.plugins.elixir.elixir,new cljs.core.Keyword(null,"eval!","eval!",1110791799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),info__$1], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elixir","on-eval.one","lt.plugins.elixir/on-eval.one",705270845),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elixir.__BEH__on_eval__DOT__one,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval.one","eval.one",1173589382),null], null), null));
lt.plugins.elixir.__BEH__elixir_watch = (function __BEH__elixir_watch(editor,res){var temp__4092__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"watches","watches",2139868463).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res)));if(cljs.core.truth_(temp__4092__auto__))
{var watch = temp__4092__auto__;var str_result = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res);return lt.object.raise.call(null,new cljs.core.Keyword(null,"inline-result","inline-result",656479555).cljs$core$IFn$_invoke$arity$1(watch),new cljs.core.Keyword(null,"update!","update!",779473898),str_result);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elixir","elixir-watch","lt.plugins.elixir/elixir-watch",2434930494),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elixir.__BEH__elixir_watch,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.elixir.watch","editor.eval.elixir.watch",3862429475),null], null), null));
lt.plugins.elixir.__BEH__elixir_result = (function __BEH__elixir_result(editor,res){lt.objs.notifos.done_working.call(null);
return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res)),new cljs.core.Keyword(null,"start-line","start-line",3689311729),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elixir","elixir-result","lt.plugins.elixir/elixir-result",2781916300),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elixir.__BEH__elixir_result,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.elixir.result","editor.eval.elixir.result",3279376621),null], null), null));
lt.plugins.elixir.__BEH__elixir_success = (function __BEH__elixir_success(editor,res){lt.objs.notifos.done_working.call(null);
return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),"\u2713",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res)),new cljs.core.Keyword(null,"start-line","start-line",3689311729),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elixir","elixir-success","lt.plugins.elixir/elixir-success",1251028626),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elixir.__BEH__elixir_success,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.elixir.success","editor.eval.elixir.success",3854322135),null], null), null));
lt.plugins.elixir.__BEH__elixir_exception = (function __BEH__elixir_exception(editor,ex){lt.objs.notifos.done_working.call(null);
return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(ex),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(ex)),new cljs.core.Keyword(null,"start-line","start-line",3689311729),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(ex))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elixir","elixir-exception","lt.plugins.elixir/elixir-exception",2707592382),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elixir.__BEH__elixir_exception,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.elixir.exception","editor.eval.elixir.exception",3886729635),null], null), null));
lt.plugins.elixir.__BEH__eval_BANG_ = (function __BEH__eval_BANG_(this$,event){var map__8212 = event;var map__8212__$1 = ((cljs.core.seq_QMARK_.call(null,map__8212))?cljs.core.apply.call(null,cljs.core.hash_map,map__8212):map__8212);var origin = cljs.core.get.call(null,map__8212__$1,new cljs.core.Keyword(null,"origin","origin",4300251800));var info = cljs.core.get.call(null,map__8212__$1,new cljs.core.Keyword(null,"info","info",1017141280));var client = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,origin)));lt.objs.notifos.working.call(null,"");
return lt.objs.clients.send.call(null,lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.eval.elixir","editor.eval.elixir",2632206786),new cljs.core.Keyword(null,"origin","origin",4300251800),origin,new cljs.core.Keyword(null,"info","info",1017141280),info,new cljs.core.Keyword(null,"create","create",3956577390),lt.plugins.elixir.try_connect], null)),new cljs.core.Keyword(null,"editor.eval.elixir","editor.eval.elixir",2632206786),info,new cljs.core.Keyword(null,"only","only",1017320222),origin);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elixir","eval!","lt.plugins.elixir/eval!",2407771522),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elixir.__BEH__eval_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval!","eval!",1110791799),null], null), null));
lt.plugins.elixir.__BEH__connect = (function __BEH__connect(this$,path){return lt.plugins.elixir.try_connect.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",1017337751),path], null)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elixir","connect","lt.plugins.elixir/connect",3231307685),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elixir.__BEH__connect,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connect","connect",1965255772),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elixir","elixir-lang","lt.plugins.elixir/elixir-lang",1314236731),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elixir.lang","elixir.lang",4344599087),null], null), null));
lt.plugins.elixir.elixir = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.elixir","elixir-lang","lt.plugins.elixir/elixir-lang",1314236731));
lt.objs.sidebar.clients.add_connector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Elixir",new cljs.core.Keyword(null,"desc","desc",1016984067),"Select a directory to serve as the root of your elixir project.",new cljs.core.Keyword(null,"connect","connect",1965255772),(function (){return lt.objs.dialogs.dir.call(null,lt.plugins.elixir.elixir,new cljs.core.Keyword(null,"connect","connect",1965255772));
})], null));
lt.plugins.elixir.__BEH__elixir_exe = (function __BEH__elixir_exe(this$,exe){return lt.object.merge_BANG_.call(null,lt.plugins.elixir.elixir,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elixir-exe","elixir-exe",1259857526),exe], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.elixir","elixir-exe","lt.plugins.elixir/elixir-exe",2527542659),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.elixir.__BEH__elixir_exe,new cljs.core.Keyword(null,"desc","desc",1016984067),"Elixir: Set the path to the Elixir executable",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"path",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"path","path",1017337751)], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true);
}

//# sourceMappingURL=elixir_compiled.js.map