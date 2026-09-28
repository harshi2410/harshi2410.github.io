@echo off
title Harshita Patle Portfolio - Local Dev Server
echo ========================================================
echo   Starting Local Web Server at http://localhost:3000 ...
echo ========================================================
echo Press Ctrl+C in this window to stop the server anytime.
echo.
start http://localhost:3000
python -m http.server 3000
pause
