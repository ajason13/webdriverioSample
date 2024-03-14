import { deepmerge } from 'deepmerge-ts'
import { config as sharedConfig } from './wdio.appium.shared.conf.ts'

export const config = deepmerge(
  sharedConfig,
  {
    capabilities: [
      {
        platformName: 'Android',
        browserName: 'chrome',
        maxInstances: 1,
        // NOTE: Change this name according to the connected physical device or emulator you have created on your local machine
        'appium:deviceName': 'Pixel_8_API_34',
        'appium:automationName': 'UiAutomator2',
        'appium:orientation': 'PORTRAIT',
        'appium:newCommandTimeout': 240
      }
    ],
    specs: ['../../test/specs/browser/**/*.ts'],
    suites: {
      smoke: ['../../test/specs/browser/login.success.ts']
    }
  },
  { clone: false }
)
