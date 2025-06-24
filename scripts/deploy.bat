@echo off
setlocal enabledelayedexpansion

echo ========================================
echo Arithmax Deployment Script for Windows
echo ========================================

if "%1"=="" (
    echo Usage: deploy.bat [win^|mac] [target]
    echo.
    echo Examples:
    echo   deploy.bat win
    echo   deploy.bat win portable
    echo   deploy.bat win nsis
    echo   deploy.bat mac
    echo   deploy.bat mac dmg
    echo   deploy.bat mac zip
    echo.
    pause
    exit /b 1
)

set PLATFORM=%1
set TARGET=%2

echo Building for: %PLATFORM%
if not "%TARGET%"=="" echo Target: %TARGET%
echo.

echo Checking prerequisites...
yarn --version >nul 2>&1
if errorlevel 1 (
    echo Error: Yarn is not installed. Please install yarn first.
    pause
    exit /b 1
)

echo Building application...
call yarn build
if errorlevel 1 (
    echo Error: Build failed.
    pause
    exit /b 1
)

echo Building Electron package...
if "%TARGET%"=="" (
    call yarn electron:build:%PLATFORM%
) else (
    call yarn electron:build:%PLATFORM%:%TARGET%
)

if errorlevel 1 (
    echo Error: Electron build failed.
    pause
    exit /b 1
)

echo.
echo ========================================
echo Build completed successfully!
echo Output files are in the 'release' directory.
echo ========================================
pause 