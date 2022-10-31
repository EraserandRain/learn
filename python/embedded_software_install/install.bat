@echo off
rem directory locations
set path=c:\cygwin\bin;C:\Program Files\PuTTY;%path%
set installType=""
set ipAddr=""
rem default IP address settings per target system
set ipAddrES=10.101.0.100
set ipAddrENV=all
set IPAddrSet=false
set params=
set ptpswLoc=C:\Advantest\PtpSw\
set pcieFileLoc=%ptpswLoc%SSD\PCIE
set installLogDir=%ptpswLoc%SysLog\Install
set runbashLoc=C:\cygwin\bin\bash.exe
set pcieFile=
set doPkgInstall=/cygdrive/c/Advantest/PtpSw/Misc/dpkg_install.sh
set checkPCIeVer=/cygdrive/c/Advantest/PtpSw/Misc/check_pciever.sh
set checkKernelVer=/cygdrive/c/Advantest/PtpSw/Misc/check_kernelver.sh
set checkPackages=/cygdrive/c/Advantest/PtpSw/Misc/check_packages.sh
set SiteMInfoFile=C:\Advantest\tp-user\Install\SiteMInfo.txt
set checkPCIeVerStatus=0
set checkKernelVerStatus=0
set checkPkgStatus=0
set installAll=1
set SMUnreachableList=

set SMList=SM000 SM001 SM010 SM011 SM020 SM021 SM030 SM031 SM040 SM041 SM050 SM051 SM060 SM061 SM070 SM071 SM080 SM081 SM090 SM091 SM100 SM101 SM110 SM111 SM120 SM121 SM130 SM131 SM140 SM141 SM150 SM151


setlocal ENABLEDELAYEDEXPANSION

rem Check command line arguments
SET Skip=1

:ARG1
if "%1"=="" (
	goto :ERROR
)
if "%1"=="ES" (
	set installType=ES
	set ipAddr=%ipAddrES% 
	set SMList=!ipAddr!
	goto :ARG2
)
if "%1"=="ENV" (
	set installType=ENV
	set ipAddr=%ipAddrENV%
	goto :ARG2
)

:ARG2
FOR %%I IN (%*) DO IF !Skip! LEQ 0 ( 
        SET params=!params! %%I
) ELSE (
	SET /A Skip-=1
)
	
if NOT "%params%"=="" (
    set ipAddr=%params%
	set IPAddrSet=true
	goto :getPCIePackage
) else (
    goto :getPCIePackage
)

goto :ERROR

:getPCIePackage
FOR %%A IN (%pcieFileLoc%\*pcie_*.deb) DO ( 
    SET pcieFile=!pcieFile! %%A 
	goto :checkPCIeExists
)

if "%pcieFile%"=="" (
      echo "[Error]: PCIe package not found. Has the MPT3000 Software been installed? Exiting..."
	  goto :end
)

:checkPCIeExists
@rem check that the PCIe package exists  
if exist %pcieFile% (
      goto :InstallPCIePkg
) else (
      echo "[Error]: PCIe package not found. Has the MPT3000 Software been installed? Exiting..."
	  goto :end
)

:InstallPCIePkg
rem clean up files from previous execution
if exist %installLogDir%\check_kernelver_log (
    erase /f %installLogDir%\check_kernelver_log
)
if exist %installLogDir%\check_pciever_log (
    erase /f %installLogDir%\check_pciever_log
)
if exist %installLogDir%\check_packages_log (
    erase /f %installLogDir%\check_packages_log
)


rem Push and install current PCIe package
echo =======================================================
if "%installType%"=="ENV" (
    echo Installation system type: Multi-Site
) else (
    echo Installation system type: %installType%
)

if 	"%IPAddrSet%"=="true" (
    echo [Info]: IP address %ipAddr% has been set on command line

) else (
   if exist %SiteMInfoFile% (
	   for /F "tokens=2* Delims==" %%I in (%SiteMInfoFile%) do set SiteMAdr=%%I 

	   if NOT "!SiteMAdr!"=="" (
	       set ipAddr=!SiteMAdr!
		   set SMList=!SiteMAdr!
		   echo [Info]: IP address !SiteMAdr! has been set from C:\Advantest\tp-user\Install\SiteMInfo.txt...
	   )
)
)

echo =======================================================
echo %ipAddr%
rem IP address(es) provided on the command line take precendece over 
rem defaut values and SiteM Install Info file
echo.
echo [Info]: Installing Embedded package: %pcieFile% on %ipAddr%...
@echo on

%runbashLoc% %doPkgInstall% %pcieFile% %ipAddr%
@echo off
echo [Info]: Embedded Package Install: Done...


:CheckPCIeRevision
echo.
echo ======================================
echo Begin Embedded Software Validation...
echo ======================================
echo.

echo [Info]: Validate PCIe package revision...
@echo on
%runbashLoc% %checkPCIeVer% %ipAddr%
@echo off

findstr /C:"PCIE Version Check: All Site modules PASS" C:\Advantest\PtpSw\SysLog\Install\InstallEmbeddedSoftware.txt > nul
if %errorlevel% EQU 0 (echo PCIe package version check: All PASS) && set checkPCIeVerStatus=1
if "%checkPCIeVerStatus%"=="0" (
    echo [Error]: PCIe version check failed. See log file in: C:\Advantest\PtpSw\SysLog\Install for more details. Exiting...
	set installAll=0
)

:CheckLinuxKernelRevision
echo.
echo =======================================
echo Perform Linux Kernel revision check...
echo =======================================
echo.
@echo on
%runbashLoc% %checkKernelVer% %ipAddr%
@echo off
findstr /C:"Kernel Version Check: All Site modules PASS" C:\Advantest\PtpSw\SysLog\Install\InstallEmbeddedSoftware.txt > nul
if %errorlevel% EQU 0 (echo Linux Kernel revision check: All PASS) && set checkKernelVerStatus=1
if "%checkKernelVerStatus%"=="0" (
    echo [Error]: Linux Kernel revision check failed. Please, see log file C:\Advantest\PtpSw\SysLog\Install\check_kernelver_log for more details.
	set installAll=0
)

:CheckForMissingOrOutdatedPackages
echo.
echo ========================================================
echo Perform check for missing or outdated Golden packages...
echo ========================================================
echo.
@echo on
%runbashLoc% %checkPackages% %ipAddr%
@echo off
findstr /C:"Check for and install missing or mismatched required packages: All Site Modules PASS" C:\Advantest\PtpSw\SysLog\Install\InstallEmbeddedSoftware.txt > nul
if %errorlevel% EQU 0 (echo Missing or outdated package check: All PASS) && set checkPkgStatus=1
if "%checkPkgStatus%"=="0" (
    echo [Error]: Missing package check failed. Please, see log file C:\Advantest\PtpSw\SysLog\Install\check_packages_log for more details.
	set installAll=0
)

echo.
echo [Info]: Done installing Embedded Software on Site module(s): %ipAddr%
echo.
goto :end


:CheckSMConnections
echo.
echo ========================================================
echo Check Site Module connectivity
echo ========================================================
echo.

set SMReachableList=
set isSMReachable=

FOR %%A in (!SMList!) do ( 
    
    set isSMReachable=false
		
    FOR /f "tokens=2,3* delims=,= " %%G IN ('ping -n 1 -w 100 %%A ^|find "Received = 1"') DO (
            if "x%%G"=="xSent" if "x%%H"=="x1" (
			     set SMReachableList=!SMReachableList! %%A
				 set isSMReachable=true
			)
	)
	
	rem For Debug purposes only!
    if "!isSMReachable!"=="false" (
	    rem echo Could not reach Site Module %%A
		set SMUnreachableList=!SMUnreachableList! %%A
	)		 
)


set ipAddr=!SMReachableList!

rem Return control to Main
EXIT /B 0

:end
rem clean up
taskkill /F /IM sh.exe /T 2> nul

rem check overall status
echo.
echo =====================================================================================================================================
if "%installAll%"=="0" (
    echo Embedded Software Install: Issues Detected
	echo Check this and individual Site Module logs in C:\Advantest\PtpSw\SysLog\Install for details and re-run installation, if necessary
) else (
    echo Embedded software install: All Site Modules PASS
)
echo =====================================================================================================================================
echo.

exit 0

REM Errors
:ERROR
echo  Usage: 
echo      %0 ES [IPAddress or SiteModuleHostName(s)]
echo  or
echo      %0 ENV [IPAddress or SiteModuleHostName(s)]
echo.  
echo  Install current PCIe package in C:\Advantest\PtpSw\SSD\PCIE on the target MPT3000 system
echo  The option ES or ENV signifies the MPT3000 platform to be targeted
echo  ENV option: installs on ENV, HVM, and HES systems
echo  ES option:  installs on ES systems
endlocal

exit 0
