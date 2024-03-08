import { deepmerge } from 'deepmerge-ts'
import { config as sharedConfig } from './wdio.shared.conf.ts'

// import type { Options } from '@wdio/types'
// import { config as sharedConfig } from './wdio.shared.conf'

export const config = deepmerge(
  sharedConfig,
  {
    capabilities: [
      {
        browserName: 'chrome'
      }
    ]
  },
  { clone: false }
)
