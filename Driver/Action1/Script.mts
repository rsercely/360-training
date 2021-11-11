myfunc "hello world"
msgbox "Action: " &Environment.Value("ActionName") &" From directory"& Environment.Value ("TestDir")


WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "bill" @@ hightlight id_;_1906537456_;_script infofile_;_ZIP::ssf1.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure "618c1c27c004098bc690ca27acbe94b5" @@ hightlight id_;_1940186760_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_1940187528_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("Micro Focus MyFlight Sample").Dialog("Login Failed").WinButton("OK").Click @@ hightlight id_;_198718_;_script infofile_;_ZIP::ssf4.xml_;_
wait 2 ' seems a bit more reliable with this here
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "" @@ hightlight id_;_1906537456_;_script infofile_;_ZIP::ssf8.xml_;_

foo = 1 ' to make it easy to set a breakpoint if desired 



