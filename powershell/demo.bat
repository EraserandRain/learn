@echo off
setlocal enabledelayedexpansion
set Skip=1

goto :ARG2

:ARG2
for %%I in (%*) do if !Skip! leq 0 (
	set params=!params! %%I
	echo %params%
) else (
	set /a Skip-=1
)

if not "%params%"=="" (
	echo halo
@REM 	set ipAddr=%params%
@REM 	echo %ipAddr%
)
