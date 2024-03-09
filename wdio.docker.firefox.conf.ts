import { deepmerge } from 'deepmerge-ts'
import { config as sharedConfig } from './wdio.shared.conf.ts'

export const config = deepmerge(
  sharedConfig,
  {
    host: 'localhost',
    port: 4444,
    path: '/wd/hub',
    capabilities: [
      {
        browserName: 'firefox'
      }
    ],
    sync: true,
    services: ['docker'],
    dockerLogs: './',
    dockerOptions: {
      image: 'selenium/standalone-firefox',
      healthCheck: 'http://localhost:4444',
      options: {
        p: ['4444:4444'],
        shmSize: '2g'
      }
    }
  },
  { clone: false }
)
