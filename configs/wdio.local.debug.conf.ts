import { deepmerge } from 'deepmerge-ts'
import { config as sharedConfig } from './wdio.shared.conf.ts'

export const config = deepmerge(
  sharedConfig,
  {
    maxInstances: 1,
    capabilities: [
      {
        browserName: 'chrome'
      }
      //   {
      //     browserName: 'firefox'
      //   },
      //   {
      //     browserName: 'MicrosoftEdge'
      //   }
    ],
    mochaOpts: {
      ui: 'bdd',
      timeout: 24 * 60 * 60 * 1000
    }
  },
  { clone: false }
)
