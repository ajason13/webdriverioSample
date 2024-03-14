import { deepmerge } from 'deepmerge-ts'
import { config as sharedConfig } from './wdio.appium.shared.conf.ts'
import { join } from 'node:path'

export const config = deepmerge(
  sharedConfig,
  {
    capabilities: [
      {
        platformName: 'Android',
        maxInstances: 1,
        // NOTE: Change this name according to the connected physical device or emulator you have created on your local machine
        'appium:deviceName': 'Pixel_8_API_34',
        'appium:automationName': 'UiAutomator2',
        'appium:orientation': 'PORTRAIT',
        'appium:newCommandTimeout': 240,
        'appium:app': join(
          process.cwd(),
          'apps',
          // NOTE: Change this name according to the app version you downloaded
          'android.wdio.native.app.v1.0.8.apk'
        ),
        'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity'
      }
    ],
    specs: ['../../test/specs/nativeMobileApp/**/*.ts'],
    suites: {
      smoke: ['../../test/specs/nativeMobileApp/login.succss.ts']
    }
  },
  { clone: false }
)
