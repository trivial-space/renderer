import render from './renderer.ts'
import * as consts from './contants.ts'
import {plane} from './utils/geometry/plane.ts'
import * as stackgl from './utils/stackgl/helpers.ts'


export const renderUtils = {
  geometry: {
    plane
  },
  stackgl
}

export const constants = consts

export const renderer = render

export default render
