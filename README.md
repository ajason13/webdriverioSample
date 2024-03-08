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

- If running in docker, make sure you have it installed

### Executing program

- If running tests with secrets/logins, make sure .env file with valid login credentials are in project root directory

- Run all the tests locally

```
npm run wdio-local
```

- Run all the tests in Docker
  - Make sure Docker is running first

```
npm run wdio-docker
```
