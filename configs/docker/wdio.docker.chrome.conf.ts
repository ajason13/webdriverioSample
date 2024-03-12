import { deepmerge } from 'deepmerge-ts'
import { config as sharedConfig } from './wdio.docker.shared.conf.ts'

export const config = deepmerge(
  sharedConfig,
  {
    capabilities: [
      {
        browserName: 'chrome'
      }
    ],
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
