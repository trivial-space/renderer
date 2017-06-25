import { painter, gl } from '../painter';
import { mat4 } from 'gl-matrix';
import planeVert from './plane-material.vert';
import planeFrag from './plane-material.frag';
import effectFrag from './effect.frag';
import { plane } from '../../lib/utils/geometry/plane';
painter.resize(window.devicePixelRatio);
var planMat1 = mat4.fromTranslation(mat4.create(), [0, 0, -3]);
var planMat2 = mat4.fromTranslation(mat4.create(), [0, 0, -3]);
var rotation = 0.01;
var projection = mat4.perspective(mat4.create(), 45, 1, 0.01, 10);
mat4.rotateY(planMat2, planMat2, Math.PI / 2);
// ===== Setup Render Context =====
var texture = painter.createStaticLayer().update({
    minFilter: 'LINEAR',
    magfilter: 'LINEAR'
});
var effect = painter.createEffectLayer().update({
    frag: effectFrag,
    uniforms: {
        source: null
    }
});
var form = painter.createForm().update(plane(2, 2));
var shade = painter.createShade().update({
    vert: planeVert,
    frag: planeFrag
});
console.log(texture);
var plane1 = painter.createSketch().update({
    form: form, shade: shade,
    uniforms: {
        transform: planMat1
    }
});
var plane2 = painter.createSketch().update({
    form: form, shade: shade,
    uniforms: {
        transform: planMat2
    },
    blend: true
});
var planeLayer = painter.createDrawingLayer().update({
    sketches: [plane1, plane2],
    uniforms: {
        texture: texture.texture(),
        projection: projection
    },
    clearColor: [0.0, 1.0, 0.0, 1.0],
    clearBits: gl.COLOR_BUFFER_BIT
});
// ===== initialize animation =====
function animate() {
    mat4.rotateY(planMat1, planMat1, rotation);
    mat4.rotateY(planMat2, planMat2, rotation);
    painter.compose(planeLayer, effect);
    requestAnimationFrame(animate);
}
var img = new Image();
img.onload = function () {
    texture.update({
        asset: img
    });
    animate();
};
img.src = '../shared-assets/hepatica_256.png';
//# sourceMappingURL=main.js.map