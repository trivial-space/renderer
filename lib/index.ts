import render from './renderer'
import * as consts from './contants'
import {plane} from './utils/geometry/plane'
import * as stackgl from './utils/stackgl/helpers'


export * from './renderer-types'


export const renderUtils = {
  geometry: {
    plane
  },
  stackgl
}

export const constants = consts

export const renderer = render

export default render
