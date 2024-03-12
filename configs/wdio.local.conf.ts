import { deepmerge } from 'deepmerge-ts'
import { config as sharedConfig } from './wdio.shared.conf.ts'

export const config = deepmerge(
  sharedConfig,
  {
    capabilities: [
      {
        browserName: 'chrome'
      },
      {
        browserName: 'firefox'
      },
      {
        browserName: 'MicrosoftEdge'
      }
    ]
  },
  { clone: false }
)
