import { deepmerge } from 'deepmerge-ts'
import { config as sharedConfig } from '../wdio.shared.conf.ts'

export const config = deepmerge(
  sharedConfig,
  {
    host: 'localhost',
    port: 4444,
    path: '/wd/hub',
    sync: true,
    services: ['docker'],
    dockerLogs: '../../',
    specs: ['../../test/specs/browser/**/*.ts'],
    suites: {
      smoke: ['../../test/specs/browser/login.success.ts']
    }
  },
  { clone: false }
)
