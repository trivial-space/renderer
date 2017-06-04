import { GL } from '../renderer-types'

export function getContext (canvas: HTMLCanvasElement) {
	const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
	if (gl == null) {
		throw Error('cannot retrieve Webgl Context')
	}
	return gl
}


export function makeClear (gl: GL, ...clearArray: string[]): number {
	return clearArray.reduce(
		(res, item) => res | (gl as any)[item.toUpperCase() + '_BUFFER_BIT'], 0
	)
}

export function setBlendFunc (gl: GL, blendOpts: string[]) {
	gl.blendFunc.apply(gl, blendOpts.map(
		opt => (gl as any)[opt.toUpperCase()]
	))
}


/**
 * Resize a canvas to match the size it's displayed.
 * @param {HTMLCanvasElement} canvas The canvas to resize.
 * @param {number} [multiplier] So you can pass in `window.devicePixelRatio` if you want to.
 * @return {boolean} true if the canvas was resized.
 */
export function resizeCanvas (canvas: HTMLCanvasElement, multiplier = 1) {

	multiplier = Math.max(1, multiplier)
	const width = canvas.clientWidth * multiplier | 0
	const height = canvas.clientHeight * multiplier | 0

	if (canvas.width !== width ||
		canvas.height !== height) {
		canvas.width = width
		canvas.height = height
		return true
	}

	return false
}