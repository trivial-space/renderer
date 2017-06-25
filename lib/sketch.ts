import { SketchData, Sketch } from './render-types'


export function create (): Sketch {

	const sketch = {} as Sketch

	sketch.update = (data: SketchData) => {
		if (data.drawSettings) {
			sketch.drawSettings = data.drawSettings
		}

		if (data.form) {
			sketch.form = data.form
		}

		if (data.shade) {
			sketch.shade = data.shade
		}

		if (data.uniforms) {
			sketch.uniforms = data.uniforms
		}

		return sketch
	}

	return sketch
}