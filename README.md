# WebdriverIO Sample Project

Try out WebdriverIO for UI and Mobile automation

## Description

Runs automated UI test (in Windows and Ubuntu for now)

Features

- Run UI tests in Chrome, Firefox, and Edge
- Allure report after every run
  - On test failure, screenshot(s) is added to report
- Run locally or in Docker (excluding mobile)
- For every pull request, tests are ran to make sure nothing is broken
  - Historical runs can be found [here](https://ajason13.github.io/webdriverioSample/)

## Getting Started

### Installing

- Install packages

```
npm install
```

- [Install Allure locally](https://allurereport.org/docs/gettingstarted-installation/) if you want to view report(s).

- If running in docker, make sure you have Docker Engine installed and running

- If running Appium, go through the installer

```
npx appium-installer
```

- When setting up the Android Environment, may need to install Java SE Runtime and adb (to create/manage Android emulator(s))
- iOS is unavailable on Windows

### Executing program

- If running tests with secrets/logins, make sure `.env` file with valid login credentials are in project root directory. Should look like something below

```
# .env file
LOGINNAME=tomsmith
PASSWORD=SuperSecretPassword!
MOBILE_LOGINNAME=test@webdriver.io
MOBILE_PASSWORD=Test1234!
```

- Run all web browser tests locally

```
npm run wdio-local
```

- Run Appium (mobile Chrome)
  - Make sure Android emulator is running and matches deviceName in `wdio.appium.android.chrome.conf.ts`
  - Known issue (not really?):
    - After test run completes, appium-service throws `ERROR @wdio/appium-service: Appium exited before timeout (exit code: null)`, but all the tests still passed/failed.

```
npm run wdio-appium-android-chrome
```

- Run Appium (native Android)
  - Create a `./apps` directory at the root of this project. Download the app files (`.zip`/`.apk`) with version >= `1.0.0`, which can be found [here](https://github.com/webdriverio/native-demo-app/releases), into the `./apps` folder.
  - Make sure Android emulator is running and matches deviceName in `wdio.appium.android.native.conf.ts`
  - Make sure app name is updated in `wdio.appium.android.native.conf.ts`

```
npm run wdio-appium-android-native
```

- Run web browser tests in Docker
  - Make sure Docker is running first
- Chrome

```
npm run wdio-docker-chrome
```

- Firefox

```
npm run wdio-docker-firefox
```

- Edge

```
npm run wdio-docker-edge
```

- View Report locally
  - In Windows Powershell

```
allure generate allure-results; allure open
```

- Everywhere else

```
allure generate allure-results && allure open
```

## Contributing

### IDE Setup

- Started project with VS Code in Windows 10
- For VS Code:
  - [Helps to have tsc: watch running.](https://code.visualstudio.com/docs/typescript/typescript-compiling#_transpile-typescript-into-javascript) But remember to run every time you re-open VS Code.
  - [Hide compiled \*.js files](https://code.visualstudio.com/docs/typescript/typescript-compiling#_hiding-derived-javascript-files)

### Pull Requests

- When PR is created, a build will be sent to a Ubuntu VM and runs `wdio-local`. If the run passes, then the PR can be merged. If the run fails, then PR won't merge. New commits to the branch/PR will re-run.
