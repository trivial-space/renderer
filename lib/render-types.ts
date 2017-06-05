export type GL = WebGLRenderingContext
export type Color = [number, number, number, number]

export type TypedArray = Uint8Array |
                  Uint16Array |
                  Uint32Array |
                  Int8Array |
                  Int16Array |
                  Int32Array |
                  Float32Array |
                  Float64Array

export type TypedArrayConstructor = Uint8ArrayConstructor |
                             Uint16ArrayConstructor |
                             Uint32ArrayConstructor |
                             Int8ArrayConstructor |
                             Int16ArrayConstructor |
                             Int32ArrayConstructor |
                             Float32ArrayConstructor |
                             Float64ArrayConstructor

export type TypedArrayTypes = 'Uint8Array' |
                       'Uint16Array' |
                       'Uint32Array' |
                       'Int8Array' |
                       'Int16Array' |
                       'Int32Array' |
                       'Float32Array' |
                       'Float64Array'

export interface RenderTarget {
  frameBuffer: WebGLFramebuffer | null
  textures: (WebGLTexture | null)[]
  depthBuffer: WebGLRenderbuffer | null
  width: number
  height: number
}


// Form

export type FormDrawType =
	'TRIANGLES' |
	'TRIANGLE_STRIP' |
	'TRIANGLE_FAN' |
	'POINTS' |
	'LINES' |
	'LINE_LOOP' |
	'LINE_STRIP'

export type FormStoreType = 'DYNAMIC' | 'STATIC'

export interface FormBufferStore {
	readonly buffer: TypedArray
	readonly storeType?: FormStoreType
}

export interface FormData {
	readonly drawType?: FormDrawType
	readonly itemCount?: number
	readonly attribs: { [id: string]: FormBufferStore }
	readonly elements?: FormBufferStore
}

export interface AttribContext {
	buffer: WebGLBuffer | null
	stride?: number,
	offset?: number,
	normalize?: boolean
}

export interface Form {
	drawType: number
	itemCount: number
	attribs: { [id: string]: AttribContext }
	elements?: {
		buffer: WebGLBuffer | null
		glType: number | null
	}
	update: (FormData) => Form
	delete: () => Form
}


// Shade

export interface ShadeData {
	readonly vert?: string
	readonly frag?: string
}

export interface UniformSetter {
	location: WebGLUniformLocation
	setter: (val: any) => void
}

export interface AttribSetter {
	location: number
	setter: (ctx: AttribContext) => void
}

export interface Shade {
	program: WebGLProgram | null
	vert: WebGLShader | null
	frag: WebGLShader | null
	vertSource?: string
	fragSource?: string
	uniformSetters: { [id: string]: UniformSetter }
	attributeSetters: { [id: string]: AttribSetter }
	update: (ShadeData) => Shade
	delete: () => Shade
}


// Sketch

export type Uniforms = { [id: string]: any }

export interface SketchData {
	form?: Form,
	shade?: Shade,
	uniforms?: Uniforms,
	blend?: [number, number] | boolean,
}

export interface DrawSettings {
	blendFns?: [number, number],
	blending?: boolean
	cull?: Cull
}

export interface Sketch {
	drawSettings: DrawSettings
	form: Form
	shade: Shade
	uniforms: Uniforms
	update: (data: SketchData) => Sketch
}


// Layer

export type MagFilter = 'LINEAR' | 'NEAREST'

export type MinFilter = MagFilter |
	'LINEAR_MIPMAP_LINEAR' |
	'LINEAR_MIPMAP_NEAREST' |
	'NEAREST_MIPMAP_LINEAR' |
	'NEAREST_MIPMAP_NEAREST'

export type Wrap = 'CLAMP_TO_EDGE' | 'REPEAT' | 'MIRRORED_REPEAT'

export type Cull = 'FRONT' | 'BACK' | 'FRONT_AND_BACK'

export type Asset = ImageData | HTMLCanvasElement | HTMLImageElement | HTMLVideoElement

export interface TextureData {
	readonly flipY?: boolean
	readonly wrap?: Wrap
	readonly wrapT?: Wrap
	readonly wrapS?: Wrap
	readonly minFilter?: MinFilter
	readonly magFilter?: MagFilter
}

export interface LayerSettings extends DrawSettings {
	clearColor?: Color
	clearBits?: number
}

export interface LayerData extends TextureData, LayerSettings {
	readonly buffered?: boolean // get its own RenderTarget
	readonly width?: number // for own RenderTarget
	readonly height?: number // for own RenderTarget

	readonly asset?: Asset // AssetLayer specific
	readonly sketches?: Sketch[]
	readonly uniforms?: { [id: string]: any } // ShaderLayer specific
	readonly frag?: string
}

export interface Layer {
	textures: (WebGLTexture | null)[]
	data: LayerData
	target?: RenderTarget
	uniforms?: Uniforms
	sketches?: Sketch[]
	texture: (index?: number) => WebGLTexture | null
	update: (LayerData) => Layer
	delete: () => Layer
}


// Painter

export interface Painter {
	gl: GL,
	createForm: () => Form
	createShade: () => Shade
	createSketch: () => Sketch
	createFlatSketch: () => Sketch
	createStaticLayer: () => Layer
	createDrawingLayer: () => Layer
	createEffectLayer: () => Layer
	draw: (sketchApi: Sketch, globalUniforms?: Uniforms, globalSettings?: DrawSettings) => void
	compose: (layers: Layer[]) => void
	resize: () => boolean
}
