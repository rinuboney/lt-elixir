defmodule TCPServer do
  def listen(port) do
    tcp_options = [:list, {:packet, 0}, {:active, false}, {:reuseaddr, true}]
    {:ok, l_socket} = :gen_tcp.listen(port, tcp_options)
    do_listen(l_socket)
  end
  defp do_listen(l_socket) do
    {:ok, socket} = :gen_tcp.accept(l_socket)
    spawn(fn -> do_server(socket) end)
    do_listen(l_socket)
  end
  defp do_server(socket) do
    case :gen_tcp.recv(socket, 0) do
      {:ok, data} ->
        :gen_tcp.send(socket,data)
        File.write("log.txt",data)
      {:error, :closed} ->
        :ok
    end
  end
end

defmodule Client do
  def main(args) do
    port = binary_to_integer(hd(args))
    IO.puts port
    TCPServer.listen(port)
  end
end

Client.main(System.argv)
