import * as consts from './contants'
import * as plane from './utils/geometry/plane'
import * as stackgl from './utils/stackgl'
export * from './render-types'


export const renderUtils = {
  geometry: {
    plane
  },
  stackgl
}

export const constants = consts
