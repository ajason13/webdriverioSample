import { deepmerge } from 'deepmerge-ts'
import { config as sharedConfig } from './wdio.shared.conf.ts'

export const config = deepmerge(
  sharedConfig,
  {
    capabilities: [
      {
        browserName: 'chrome',
        'goog:chromeOptions': {
          args: ['--headless']
        }
      },
      {
        browserName: 'firefox',
        'moz:firefoxOptions': {
          args: ['--headless']
        }
      },
      {
        browserName: 'MicrosoftEdge',
        'ms:edgeOptions': {
          args: ['--headless']
        }
      }
    ]
  },
  { clone: false }
)
