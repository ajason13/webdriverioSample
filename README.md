# WebdriverIO Sample Project

Try out WebdriverIO for UI, API, and mobile automation

## Description

Runs automated UI test (in Windows for now)

Features

- Run UI tests in Chrome
- HTML report after every run
  - On test failure, screenshot(s) is added to report
- Run locally or in Docker
- For every pull request, tests are ran to make sure nothing is broken

## Getting Started

### Installing

- Install packages

```
npm install
```

- If running in docker, make sure you have Docker Engine installed and running

- If running Appium, go through the installer

```
npx appium-installer
```

- When setting up the Android Environment, may need to install Java SE Runtime and adb (to create/manage Android emulator(s))
- iOS is unavailable on Windows

### Executing program

- If running tests with secrets/logins, make sure .env file with valid login credentials are in project root directory

- Run all web browser tests locally

```
npm run wdio-local
```

- Run Appium (mobile Chrome)
  - Make sure Android emulator is running and matches deviceName in wdio.appium.conf.ts

```
npm run wdio-appium
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

## Contributing

### IDE Setup

- Started project with VS Code in Windows 10

### Pull Requests

- When PR is created, a build will be sent to a Windows VM and runs the local command. If the run passes, then the PR can be merged. If the run fails, then PR won't merge. New commits to the branch/PR will re-run.
