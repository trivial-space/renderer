import { convertStackGLGeometry } from '../../lib/utils/stackgl'
import { mat4 } from 'gl-matrix'
import createCube from 'primitive-cube'
import { gl } from '../ctx'
import { Geometry } from '../../lib/geometry'
import { Shader } from '../../lib/shader'
import { Drawing } from '../../lib/drawing'
import { makeClear } from '../../lib/utils/context'


const cubeStackgl = createCube(1)
let cubeGeometry = convertStackGLGeometry(cubeStackgl)

cubeGeometry = {
	...cubeGeometry,
	drawType: 'LINE_LOOP'
}


const rotationX = 0.01
const rotationZ = 0.009101
const cubeMat = mat4.fromTranslation(mat4.create(), [0, 0, -3])
const projection = mat4.perspective(mat4.create(), 45, 1, 0.01, 10)


const geometry = new Geometry(gl)
geometry.update(cubeGeometry)

const shader = new Shader(gl)
shader.update({
	vert: `
		attribute vec3 position;
		attribute vec3 normal;
		uniform mat4 camera;
		uniform mat4 transform;

		varying vec3 vNormal;

		void main() {
			vNormal = normal;
			gl_Position = camera * transform * vec4(position, 1.0);
		}
	`,
	frag: `precision mediump float;
		varying vec3 vNormal;
		void main() {
			gl_FragColor = vec4(abs(vNormal), 1.0);
		}
	`
})

const drawing = new Drawing(gl)
drawing.update({
	shader, geometry,
	uniforms: {
		camera: projection,
		transform: cubeMat
	}
})

const clearBits = makeClear(gl, 'color', 'depth')
gl.enable(gl.DEPTH_TEST)
gl.clearColor(1.0, 0.5, 0.8, 1.0)

function animate () {
	mat4.rotateY(cubeMat, cubeMat, rotationX)
	mat4.rotateZ(cubeMat, cubeMat, rotationZ)
	mat4.rotateX(cubeMat, cubeMat, 1.78 * rotationZ)
	gl.clear(clearBits)
	drawing.draw()
	requestAnimationFrame(animate)
}

animate()