@echo off
rem Hongdae map: start a local web server and open the browser
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0tools\serve.ps1"
if errorlevel 1 pause
