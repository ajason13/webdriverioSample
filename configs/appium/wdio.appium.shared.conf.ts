import { deepmerge } from 'deepmerge-ts'
import { config as sharedConfig } from '../wdio.shared.conf.ts'

export const config = deepmerge(
  sharedConfig,
  {
    port: 4723,
    services: ['appium'],
    specs: ['../../test/specs/**/*.ts'],
    suites: {
      smoke: ['../../test/specs/login.success.ts']
    }
  },
  { clone: false }
)
