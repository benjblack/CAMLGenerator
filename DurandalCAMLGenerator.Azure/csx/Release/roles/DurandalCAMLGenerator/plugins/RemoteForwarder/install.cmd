@echo off
if "%IsEmulated%"=="true" goto :eof
start /wait msiexec /quiet /i %RoleRoot%\plugins\RemoteForwarder\RemoteForwarder.msi

@echo Add forwarder rule to the firewall 
netsh advfirewall firewall add rule name="WaRemoteForwarderService rule" description="Allow incoming connections to the forwarder" dir=in protocol=tcp program="%ProgramFiles%\Windows Azure Remote Forwarder\RemoteForwarder\RemoteForwarderService.exe" action=allow enable=yes