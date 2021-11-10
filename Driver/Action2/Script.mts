msgbox "Action: " &Environment.Value("ActionName") &" From directory"& Environment.Value ("TestDir")

WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "bill"
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure "618c1c27c004098bc690ca27acbe94b5"
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click
WpfWindow("Micro Focus MyFlight Sample").Dialog("Login Failed").WinButton("OK").Click
wait 2 ' seems a bit more reliable with this here
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set ""


foo = 1 ' to make it easy to set a breakpoint if desired 



