import lib from './asset-lib.ts'
import {
  Context,
  RenderTarget,
  ID,
  GL,
  Wrap,
  ObjectData,
  ShaderData,
  GeometryData,
  LayerData,
  TextureData,
  ContextObjectInitialized,
  ContextLayerObjects,
  ContextLayerStatic,
  ContextLayerShader,
  ContextLayer,
  ContextShader,
  ContextGeometry,
  GeometryBuffer,
  GeometryArray,
  TypedArray,
  TypedArrayConstructor
} from './renderer-types.ts'


export function create (canvas?: HTMLCanvasElement): Context{

  if (canvas == null) {
    canvas = document.createElement('canvas')
  }

  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')

  if (!gl) {
    throw Error('WebGL-Context could not be initialized!')
  }

  const ctx: Context = {

    settings: {
      clearColor: [0.0, 0.0, 0.0, 1.0],
      minFilter: 'LINEAR',
      magFilter: 'NEAREST',
      wrap: 'CLAMP_TO_EDGE',
      clearBuffers: ['DEPTH', 'COLOR'],
      clearBits: 0,
      enable: ['DEPTH_TEST'],
      blend: ["SRC_ALPHA", "ONE_MINUS_SRC_ALPHA"],
      width: canvas.width,
      height: canvas.height
    },

    shaders: {},
    geometries: {},
    layers: {},
    objects: {},
    source: {} as RenderTarget,
    target: {} as RenderTarget,
    gl: gl
  }

  updateSettings(ctx, ctx.settings)
  updateGeometry(ctx, '_renderQuad', lib.geometries.renderQuad)
  updateShader(ctx, '_basicEffect', lib.shaders.basicEffect)
  updateObject(ctx, '_result', lib.objects.resultScreen)
  return updateSize(ctx)
}


export function init (ctx: Context, data: any): Context {
  updateSettings(ctx, data.settings)
  initShaders(ctx, data.shaders)
  initGeometries(ctx, data.geometries)
  initObjects(ctx, data.objects)
  initLayers(ctx, data.layers)
  return updateSize(ctx)
}


function initShaders (ctx: Context, data: any) {
  if (data) {
    for (let k in data) {
      let v = data[k]
      updateShader(ctx, k, v)
    }
  }
}

function initLayers (ctx: Context, data: any) {
  if (data) {
    for (let k in data) {
      let v = data[k]
      updateLayer(ctx, k, v)
    }
  }
}

function initGeometries (ctx: Context, data: any) {
  if (data) {
    for (let k in data) {
      let v = data[k]
      updateGeometry(ctx, k, v)
    }
  }
}

function initObjects (ctx: Context, data: any) {
  if (data) {
    for (let k in data) {
      let v = data[k]
      updateObject(ctx, k, v)
    }
  }
}


export function updateSettings (ctx: Context, data: any = {}): Context {

  const gl = ctx.gl

  if (data.clearColor != null) {
    ctx.settings.clearColor = data.clearColor
  }
  if (data.minFilter != null) {
    ctx.settings.minFilter = data.minFilter
  }
  if (data.magFilter != null) {
    ctx.settings.magFilter = data.magFilter
  }
  if (data.wrap != null) {
    ctx.settings.wrap = data.wrap
  }
  if (data.clearBuffers != null) {
    ctx.settings.clearBuffers = data.clearBuffers
    ctx.settings.clearBits = makeClear(gl, data.clearBuffers)
  }

  if (data.enable != null) {
    for (let param of ctx.settings.enable) {
      gl.disable(gl[param])
    }
    ctx.settings.enable = data.enable
    for (let param of ctx.settings.enable) {
      gl.enable(gl[param])
    }
  }

  if (data.blend !== undefined) {
    ctx.settings.blend = data.blend
  }
  if (ctx.settings.blend) {
    setBlendFunc(gl, ctx.settings.blend)
  }

  return ctx
}


export function updateObject (
  ctx: Context,
  id: ID,
  object: ObjectData
): Context {

  let old = ctx.objects[id]
  let newO = Object.assign({}, object, {
    type: "initialized"
  }) as ContextObjectInitialized

  if (newO.uniforms == null) {
    newO.uniforms = {}
  }
  ctx.objects[id] = newO

  if (old && old.type === "missing") {
    for (let layerId in old.updateLayers) {
      updateLayer(ctx, layerId, old.updateLayers[layerId])
    }
  }
  return ctx
}


export function updateShader (
  ctx: Context,
  id: ID,
  data: ShaderData
): Context {

  const shader = ctx.shaders[id] || {} as ContextShader
  const newProgram = shader.program == null
  const gl = ctx.gl
  const fragSource = 'precision mediump float;\n' + data.frag

  if (newProgram) {
    shader.program = gl.createProgram()
  }
  if (shader.vert == null) {
    shader.vert = gl.createShader(gl.VERTEX_SHADER)
  }
  if (shader.frag == null) {
    shader.frag = gl.createShader(gl.FRAGMENT_SHADER)
  }

  gl.shaderSource(shader.vert, data.vert)
  gl.shaderSource(shader.frag, fragSource)
  gl.compileShader(shader.vert)
  gl.compileShader(shader.frag)

  if (!gl.getShaderParameter(shader.vert, gl.COMPILE_STATUS)) {
    console.error('Error Compiling Vertex Shader!\n', gl.getShaderInfoLog(shader.vert), data.vert)
  }
  if (!gl.getShaderParameter(shader.frag, gl.COMPILE_STATUS)) {
    console.error('Error Compiling Fragment Shader!\n', gl.getShaderInfoLog(shader.frag), data.frag)
  }

  if (newProgram) {
    gl.attachShader(shader.program, shader.vert)
    gl.attachShader(shader.program, shader.frag)
  }

  gl.linkProgram(shader.program)

  shader.attribs = {}
  for (let id in data.attribs) {
    let type = data.attribs[id]
    let attrib = {
      index: gl.getAttribLocation(shader.program, id),
      type: gl.FLOAT,
      itemSize: attribItemSize[type]
    }
    if (attrib.index < 0) {
      console.error('attribute "' + id + '" could not be found in shader', data.vert)
    }
    shader.attribs[id] = attrib
  }

  shader.uniforms = {}
  for (let id in data.uniforms) {
    shader.uniforms[id] = {
      index: gl.getUniformLocation(shader.program, id),
      type: data.uniforms[id]
    }
  }

  ctx.shaders[id] = shader

  return ctx
}


export function updateGeometry (
  ctx: Context,
  id: ID,
  data: GeometryData
): Context {

  const gl = ctx.gl
  const geometry = ctx.geometries[id] || {} as ContextGeometry
  geometry.drawType = gl[data.drawType]
  geometry.itemCount = data.itemCount

  const attribs = geometry.attribs || {}
  for (let id in data.attribs) {
    let attribData = data.attribs[id]
    if (attribs[id] == null) {
      attribs[id] = gl.createBuffer()
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, attribs[id])
    gl.bufferData(gl.ARRAY_BUFFER, getBufferData(attribData),
                  gl[(attribData.storeType || 'STATIC') + '_DRAW'])
  }
  geometry.attribs = attribs

  if (data.elements) {
    if (geometry.elements == null) {
      geometry.elements = { buffer: null, glType: null }
    }
    if (geometry.elements.buffer == null) {
      geometry.elements.buffer = gl.createBuffer()
    }
    const buffer = getBufferData(data.elements)
    geometry.elements.glType = typedArrayToGLType(buffer, gl)
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, geometry.elements.buffer)
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, buffer,
                  gl[(data.elements.storeType || 'STATIC') + '_DRAW'])

  } else if (geometry.elements) {
    delete geometry.elements
  }

  ctx.geometries[id] = geometry
  return ctx
}


export function updateLayer (
  ctx: Context,
  layerId: ID,
  data: LayerData
): Context {

  const layer = ctx.layers[layerId] || {} as ContextLayer
  layer.noClear = !!data.noClear
  layer.clearColor = data.clearColor || ctx.settings.clearColor

  if (data.buffered) {
    layer.renderTarget = {
      width: data.width || ctx.settings.width,
      height: data.height || ctx.settings.height,
      frameBuffer: null, texture: null, depthBuffer: null
    }
    updateRenderTarget(ctx.gl, layer.renderTarget, data)
  } else {
    delete layer.renderTarget
  }

  if (data.asset) {
    layer.type = "static"
    updateStaticLayer(ctx.gl, layer as ContextLayerStatic, data)

  } else if (data.objects) {
    let l = layer as ContextLayerObjects
    l.type = "objects"
    l.transparents = []
    l.opaques = []
    l.uniforms = data.uniforms || {}
    for (let id of data.objects) {
      let o = ctx.objects[id]
      if (o) {
        if (o.type === "initialized") {
          if (o.blend) {
            l.transparents.push(id)
          } else {
            l.opaques.push(id)
          }
        } else {
          o.updateLayers[layerId] = data
        }
      } else {
        ctx.objects[id] = {
          type: "missing",
          updateLayers: {
            [layerId]: data
          }
        }
      }
    }

  } else if (data.shader) {
    let l = layer as ContextLayerShader
    l.type = "shader"
    l.object = {
      type: "initialized",
      shader: data.shader,
      geometry: '_renderQuad',
      uniforms: data.uniforms || {},
    }
  }

  ctx.layers[layerId] = layer
  return ctx
}

function updateStaticLayer (gl: GL, layer: ContextLayerStatic, data: LayerData) {
  const texture = layer.texture || gl.createTexture()
  gl.bindTexture(gl.TEXTURE_2D, texture)
  setTextureParams(gl, data)
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, data.asset)
  if (data.minFilter && data.minFilter.indexOf("MIPMAP") > 0) {
    gl.generateMipmap(gl.TEXTURE_2D)
  }
  gl.bindTexture(gl.TEXTURE_2D, null)
  layer.texture = texture
}


export function updateSize ( ctx: Context ): Context {

  const gl = ctx.gl
  const width = gl.canvas.clientWidth || gl.canvas.width
  const height = gl.canvas.clientHeight || gl.canvas.height

  if (width !== ctx.settings.width || height !== ctx.settings.height) {
    gl.canvas.height = ctx.settings.height = height
    gl.canvas.width = ctx.settings.width = width
    updateRenderTarget(ctx.gl, ctx.source, ctx.settings)
    updateRenderTarget(ctx.gl, ctx.target, ctx.settings)
  }

  return ctx
}


export function renderLayers ( ctx: Context, layerIds: ID[] ) {

  const gl = ctx.gl
  const last = layerIds.length - 1

  for (let i = 0; i < layerIds.length; i++) {
    const layerId = layerIds[i]
    const layer = ctx.layers[layerId]
    const directRender = i === last
    const renderToStack = !directRender && layer.renderTarget == null

    if (directRender) {
      gl.bindFramebuffer(gl.FRAMEBUFFER, null)
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight)

    } else if (renderToStack) {
      gl.bindFramebuffer(gl.FRAMEBUFFER, ctx.target.frameBuffer)
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight)

    } else if (layer.renderTarget) {
      gl.bindFramebuffer(gl.FRAMEBUFFER, layer.renderTarget.frameBuffer)
      gl.viewport(0, 0, layer.renderTarget.width, layer.renderTarget.height)
    }

    if (!layer.noClear) {
      gl.clearColor.apply(gl, layer.clearColor || ctx.settings.clearColor)
      gl.clear(ctx.settings.clearBits)
    }

    switch (layer.type) {
      case "shader":
        renderObject(ctx, layer.object)
        break

      case "objects":
        for (let id of layer.opaques) {
          renderObject(ctx, ctx.objects[id] as ContextObjectInitialized, layer.uniforms)
        }
        if (layer.transparents.length) {
          gl.enable(gl.BLEND)
          for (let id of layer.transparents) {
            renderObject(ctx, ctx.objects[id] as ContextObjectInitialized, layer.uniforms)
          }
          gl.disable(gl.BLEND)
        }
        break

      case "static":
        if (directRender) {
          const object = ctx.objects['_result'] as ContextObjectInitialized
          renderObject(ctx, object, {source: layerId})
        }
        break
    }

    if (renderToStack) {
      const tmp = ctx.source
      ctx.source = ctx.target
      ctx.target = tmp
    }
  }
}


function renderObject (
  ctx: Context,
  object: ContextObjectInitialized,
  globalUniforms?: {[id: string]: any}
): void {

  let textureCount = 0

  const gl = ctx.gl
  const shader = ctx.shaders[object.shader]
  const geometry = ctx.geometries[object.geometry]

  gl.useProgram(shader.program)

  for (let id in shader.attribs) {
    const attrib = shader.attribs[id]
    gl.bindBuffer(gl.ARRAY_BUFFER, geometry.attribs[id])
    gl.enableVertexAttribArray(attrib.index)
    gl.vertexAttribPointer(attrib.index, attrib.itemSize, attrib.type, false, 0, 0)
  }

  for (let id in shader.uniforms) {
    const uniform = shader.uniforms[id]
    const index = uniform.index
    const value = object.uniforms[id] || (globalUniforms && globalUniforms[id])

    switch (uniform.type) {

      case 't':
        let texture = value ?
          (<ContextLayerStatic> ctx.layers[value]).texture :
          ctx.source.texture
        gl.activeTexture(gl['TEXTURE' + textureCount])
        gl.bindTexture(gl.TEXTURE_2D, texture)
        gl.uniform1i(index, textureCount)
        textureCount++
        break

      case 'f':
      case 'f 1':
        gl.uniform1f(index, value)
        break

      case 'f 2':
        gl.uniform2fv(index as WebGLUniformLocation, value)
        break

      case 'f 3':
        gl.uniform3fv(index as WebGLUniformLocation, value)
        break

      case 'f 4':
        gl.uniform4fv(index as WebGLUniformLocation, value)
        break

      case 'm 2':
        gl.uniformMatrix2fv(index as WebGLUniformLocation, false, value)
        break

      case 'm 3':
        gl.uniformMatrix3fv(index as WebGLUniformLocation, false, value)
        break

      case 'm 4':
        gl.uniformMatrix4fv(index as WebGLUniformLocation, false, value)
        break

      case 'i':
      case 'i 1':
        gl.uniform1i(index, value)
        break

      case 'i 2':
        gl.uniform2iv(index as WebGLUniformLocation, value)
        break

      case 'i 3':
        gl.uniform3iv(index as WebGLUniformLocation, value)
        break

      case 'i 4':
        gl.uniform4iv(index as WebGLUniformLocation, value)
        break

      default:
        console.error('Uniform type ' + (uniform as any).type + ' unknown. uniform ' + id + ' not set!')
    }
  }

  if (geometry.elements && geometry.elements.glType != null) {
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, geometry.elements.buffer)
    gl.drawElements(geometry.drawType, geometry.itemCount, geometry.elements.glType, 0)
  } else {
    gl.drawArrays(geometry.drawType, 0, geometry.itemCount)
  }
}


function makeClear (gl: GL, clearArray: string[]): number {
  return clearArray.reduce(
    (res, item) => res | gl[item + '_BUFFER_BIT'], 0
  )
}


function setBlendFunc (gl: GL, blendOpts: string[]) {
  gl.blendFunc.apply(gl, blendOpts.map(opt => gl[opt]))
}


function setTextureParams (gl: GL, data: TextureData) {

  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, data.flipY as any)

  let wrapS: Wrap | undefined,
      wrapT: Wrap | undefined
  if (data.wrap) {
    wrapS = wrapT = data.wrap
  } else {
    wrapT = data.wrapT
    wrapS = data.wrapS
  }

  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl[wrapS || "CLAMP_TO_EDGE"])
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl[wrapT || "CLAMP_TO_EDGE"])

  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl[data.magFilter || "LINEAR"])
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl[data.minFilter || "LINEAR"])
}


function updateRenderTarget (gl: GL, target: RenderTarget, data: LayerData) {
  if (data.width == null || data.height == null) return;
  if (target.frameBuffer == null) {
    target.frameBuffer = gl.createFramebuffer()
  }
  if (target.texture == null) {
    target.texture = gl.createTexture()
  }
  if (target.depthBuffer == null) {
    target.depthBuffer = gl.createRenderbuffer()
  }
  gl.bindTexture(gl.TEXTURE_2D, target.texture)
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, data.width, data.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, undefined)
  setTextureParams(gl, data)
  gl.bindRenderbuffer(gl.RENDERBUFFER, target.depthBuffer)
  gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, data.width, data.height)
  gl.bindFramebuffer(gl.FRAMEBUFFER, target.frameBuffer)
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, target.texture, 0)
  gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, target.depthBuffer)

  const err = gl.checkFramebufferStatus(gl.FRAMEBUFFER)
  if (err !== gl.FRAMEBUFFER_COMPLETE) {
    console.error('framebuffer error', err, data)
  }

  gl.bindFramebuffer(gl.FRAMEBUFFER, null)
  gl.bindTexture(gl.TEXTURE_2D, null)
  gl.bindRenderbuffer(gl.RENDERBUFFER, null)
}


function getBufferData (data: GeometryBuffer | GeometryArray): TypedArray {
  if (isGeometryBuffer(data)) {
    return data.buffer
  } else {
    let TypedArray = window[data.type] as TypedArrayConstructor
    return new TypedArray(data.array)
  }
}


function typedArrayToGLType (array: TypedArray, gl: GL) {
  if (array instanceof Uint8Array) {
    return gl.UNSIGNED_BYTE
  }
  if (array instanceof Uint16Array) {
    return gl.UNSIGNED_SHORT
  }
  if (array instanceof Uint32Array) {
    return gl.UNSIGNED_INT
  }
  throw new TypeError('invalid array type')
}


const attribItemSize = {
  'f': 1,
  'f 1': 1,
  'f 2': 2,
  'f 3': 3,
  'f 4': 4,
  'm 2': 4,
  'm 3': 9,
  'm 4': 16
}


function isGeometryBuffer (b: GeometryBuffer | GeometryArray): b is GeometryBuffer {
  return ((b as GeometryBuffer).buffer != null)
}


export default {
  create,
  init,
  updateSettings,
  updateObject,
  updateGeometry,
  updateShader,
  updateLayer,
  updateSize,
  renderLayers,
  lib
}
