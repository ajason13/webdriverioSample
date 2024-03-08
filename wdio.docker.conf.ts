import { deepmerge } from 'deepmerge-ts'
import { config as sharedConfig } from './wdio.shared.conf.ts'

export const config = deepmerge(
  sharedConfig,
  {
    host: 'localhost',
    path: '/wd/hub',
    capabilities: [
      {
        browserName: 'chrome'
      }
    ],
    sync: true,
    services: ['docker'],
    dockerLogs: './',
    dockerOptions: {
      image: 'selenium/standalone-chrome',
      healthCheck: 'http://localhost:4444',
      options: {
        p: ['4444:4444'],
        shmSize: '2g'
      }
    }
  },
  { clone: false }
)
