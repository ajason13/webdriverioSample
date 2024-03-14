import { deepmerge } from 'deepmerge-ts'
import { config as sharedConfig } from '../wdio.shared.conf.ts'

export const config = deepmerge(
  sharedConfig,
  {
    port: 4723,
    services: ['appium']
  },
  { clone: false }
)
