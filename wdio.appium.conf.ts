import { deepmerge } from 'deepmerge-ts'
import { config as sharedConfig } from './wdio.shared.conf.ts'

export const config = deepmerge(
  sharedConfig,
  {
    port: 4723,
    services: ['appium'],
    capabilities: [
      {
        platformName: 'Android',
        browserName: 'chrome',
        maxInstances: 1,
        // NOTE: Change this name according to the Emulator you have created on your local machine
        'appium:deviceName': 'Pixel_8_API_34',
        'appium:automationName': 'UiAutomator2',
        'appium:orientation': 'PORTRAIT',
        'appium:newCommandTimeout': 240
      }
    ]
  },
  { clone: false }
)
