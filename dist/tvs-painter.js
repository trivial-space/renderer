!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.tvsPainter=e():t.tvsPainter=e()}(window,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);var n={};r.r(n),r.d(n,"GEOMETRY_PROP_POSITION",function(){return f}),r.d(n,"GEOMETRY_PROP_NORMAL",function(){return l}),r.d(n,"GEOMETRY_PROP_UV",function(){return c}),r.d(n,"UNIFORM_SOURCE_TEXTURE",function(){return T}),r.d(n,"VARYING_UV_COORDS",function(){return E}),r.d(n,"GL_TYPE",function(){return _});var i={};r.r(i),r.d(i,"plane",function(){return h});var s={};r.r(s),r.d(s,"STACK_GL_GEOMETRY_PROP_POSITION",function(){return d}),r.d(s,"STACK_GL_GEOMETRY_PROP_NORMAL",function(){return g}),r.d(s,"STACK_GL_GEOMETRY_PROP_UV",function(){return m}),r.d(s,"STACK_GL_GEOMETRY_PROP_ELEMENTS",function(){return R}),r.d(s,"convertStackGLGeometry",function(){return S});var a={};r.r(a),r.d(a,"getContext",function(){return y}),r.d(a,"makeClear",function(){return p}),r.d(a,"setBlendFunc",function(){return F}),r.d(a,"resizeCanvas",function(){return b});var o={};r.r(o),r.d(o,"defaultTextureSettings",function(){return U}),r.d(o,"getDefaultLayerSettings",function(){return N}),r.d(o,"defaultForms",function(){return I}),r.d(o,"defaultShaders",function(){return L});var u={};r.r(u),r.d(u,"Painter",function(){return st});const f="position",l="normal",c="uv",T="source",E="coords",_={FLOAT:5126,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,INT:5124,INT_VEC2:35667,INT_VEC3:35668,INT_VEC4:35669,BOOL:35670,BOOL_VEC2:35671,BOOL_VEC3:35672,BOOL_VEC4:35673,FLOAT_MAT2:35674,FLOAT_MAT3:35675,FLOAT_MAT4:35676,SAMPLER_2D:35678,SAMPLER_CUBE:35680,SAMPLER_3D:35679,SAMPLER_2D_SHADOW:35682,FLOAT_MAT2X3:35685,FLOAT_MAT2X4:35686,FLOAT_MAT3X2:35687,FLOAT_MAT3X4:35688,FLOAT_MAT4X2:35689,FLOAT_MAT4X3:35690,SAMPLER_2D_ARRAY:36289,SAMPLER_2D_ARRAY_SHADOW:36292,SAMPLER_CUBE_SHADOW:36293,UNSIGNED_INT:5125,UNSIGNED_INT_VEC2:36294,UNSIGNED_INT_VEC3:36295,UNSIGNED_INT_VEC4:36296,INT_SAMPLER_2D:36298,INT_SAMPLER_3D:36299,INT_SAMPLER_CUBE:36300,INT_SAMPLER_2D_ARRAY:36303,UNSIGNED_INT_SAMPLER_2D:36306,UNSIGNED_INT_SAMPLER_3D:36307,UNSIGNED_INT_SAMPLER_CUBE:36308,UNSIGNED_INT_SAMPLER_2D_ARRAY:36311,TEXTURE_2D:3553,TEXTURE_CUBE_MAP:34067,TEXTURE_3D:32879,TEXTURE_2D_ARRAY:35866,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,UNSIGNED_SHORT_4_4_4_4:32819,UNSIGNED_SHORT_5_5_5_1:32820,UNSIGNED_SHORT_5_6_5:33635,HALF_FLOAT:5131,UNSIGNED_INT_2_10_10_10_REV:33640,UNSIGNED_INT_10F_11F_11F_REV:35899,UNSIGNED_INT_5_9_9_9_REV:35902,FLOAT_32_UNSIGNED_INT_24_8_REV:36269,UNSIGNED_INT_24_8:34042};function h(t,e,r,n){const i=t/2,s=e/2,a=r||1,o=n||1,u=a+1,f=o+1,l=t/a,c=e/o,T=new Float32Array(u*f*3),E=new Float32Array(u*f*3),_=new Float32Array(u*f*2);let h,A,d=0,g=0;for(h=0;h<f;h++){const t=h*c-s;for(A=0;A<u;A++){const e=A*l-i;T[d]=e,T[d+1]=-t,E[d+2]=1,_[g]=A/a,_[g+1]=1-h/o,d+=3,g+=2}}d=0;const m=new(T.length/3>65535?Uint32Array:Uint16Array)(a*o*6);for(h=0;h<o;h++)for(A=0;A<a;A++){const t=A+u*h,e=A+u*(h+1),r=A+1+u*(h+1),n=A+1+u*h;m[d]=t,m[d+1]=e,m[d+2]=n,m[d+3]=e,m[d+4]=r,m[d+5]=n,d+=6}return{attribs:{position:{buffer:T},normal:{buffer:E},uv:{buffer:_}},elements:{buffer:m},drawType:"TRIANGLES",itemCount:m.length}}function A(t,e=[]){for(const r of t){const t=e.length;for(let n=0;n<r.length;n++)e[n+t]=r[n]}return e}const d="positions",g="normals",m="uvs",R="cells";function S(t){const e={drawType:"TRIANGLES",attribs:{},itemCount:0};for(const r in t){const n=t[r];if(r===R){const t=new(n.length>65535?Uint32Array:Uint16Array)(A(n));Object.assign(e,{elements:{buffer:t},itemCount:t.length})}else r===d?e.attribs[f]={buffer:new Float32Array(A(n))}:r===g?e.attribs[l]={buffer:new Float32Array(A(n))}:r===m?e.attribs[c]={buffer:new Float32Array(A(n))}:e.attribs[r]={buffer:new Float32Array(A(n))}}return e}function y(t,e){const r=t.getContext("webgl",e)||t.getContext("experimental-webgl",e);if(null==r)throw Error("Webgl context cannot be initialized");return r}function p(t,...e){return e.reduce((e,r)=>e|t[r.toUpperCase()+"_BUFFER_BIT"],0)}function F(t,e){t.blendFunc.apply(t,e.map(e=>t[e.toUpperCase()]))}function b(t,e=1){const r=t.clientWidth*e|0,n=t.clientHeight*e|0;return(t.width!==r||t.height!==n)&&(t.width=r,t.height=n,!0)}const U={wrap:"CLAMP_TO_EDGE",minFilter:"LINEAR",magFilter:"NEAREST"};function N(t){return{clearColor:[0,0,0,1],enable:[t.DEPTH_TEST],blendFunc:[t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA]}}const I={renderQuad:{attribs:{[f]:{buffer:new Float32Array([-1,1,-1,-1,1,1,1,-1]),storeType:"STATIC"},[c]:{buffer:new Float32Array([0,1,0,0,1,1,1,0]),storeType:"STATIC"}},drawType:"TRIANGLE_STRIP",itemCount:4}},L={basicEffect:{vert:`\nattribute vec2 ${f};\nattribute vec2 ${c};\nvarying vec2 ${E};\nvoid main() {\n\t${E} = ${c};\n\tgl_Position = vec4(${f}, 0.0, 1.0);\n}`,frag:`precision mediump float;\nuniform sampler2D ${T};\nvarying vec2 ${E};\nvoid main() {\n\tgl_FragColor = texture2D(${T}, ${E});\n}`}};function O(t){return z[t].bindPoint}function D(t,e){return function(r){t.uniform1i(e,r)}}function M(t,e){return function(r){t.uniform1iv(e,r)}}function P(t,e){return function(r){t.uniform2iv(e,r)}}function C(t,e){return function(r){t.uniform3iv(e,r)}}function B(t,e){return function(r){t.uniform4iv(e,r)}}function w(t,e,r,n){const i=O(e);return function(e){t.uniform1i(n,r),t.activeTexture(t.TEXTURE0+r),t.bindTexture(i,e)}}function x(t,e,r,n,i){const s=O(e),a=new Int32Array(i);for(let t=0;t<i;++t)a[t]=r+t;return function(e){t.uniform1iv(n,a);for(const r in e)t.activeTexture(t.TEXTURE0+a[r]),t.bindTexture(s,e[r])}}const z={[_.FLOAT]:{Type:Float32Array,size:4,setter:function(t,e){return function(r){t.uniform1f(e,r)}},arraySetter:function(t,e){return function(r){t.uniform1fv(e,r)}}},[_.FLOAT_VEC2]:{Type:Float32Array,size:8,setter:function(t,e){return function(r){t.uniform2fv(e,r)}}},[_.FLOAT_VEC3]:{Type:Float32Array,size:12,setter:function(t,e){return function(r){t.uniform3fv(e,r)}}},[_.FLOAT_VEC4]:{Type:Float32Array,size:16,setter:function(t,e){return function(r){t.uniform4fv(e,r)}}},[_.INT]:{Type:Int32Array,size:4,setter:D,arraySetter:M},[_.INT_VEC2]:{Type:Int32Array,size:8,setter:P},[_.INT_VEC3]:{Type:Int32Array,size:12,setter:C},[_.INT_VEC4]:{Type:Int32Array,size:16,setter:B},[_.UNSIGNED_INT]:{Type:Uint32Array,size:4,setter:function(t,e){return function(r){t.uniform1ui(e,r)}},arraySetter:function(t,e){return function(r){t.uniform1uiv(e,r)}}},[_.UNSIGNED_INT_VEC2]:{Type:Uint32Array,size:8,setter:function(t,e){return function(r){t.uniform2uiv(e,r)}}},[_.UNSIGNED_INT_VEC3]:{Type:Uint32Array,size:12,setter:function(t,e){return function(r){t.uniform3uiv(e,r)}}},[_.UNSIGNED_INT_VEC4]:{Type:Uint32Array,size:16,setter:function(t,e){return function(r){t.uniform4uiv(e,r)}}},[_.BOOL]:{Type:Uint32Array,size:4,setter:D,arraySetter:M},[_.BOOL_VEC2]:{Type:Uint32Array,size:8,setter:P},[_.BOOL_VEC3]:{Type:Uint32Array,size:12,setter:C},[_.BOOL_VEC4]:{Type:Uint32Array,size:16,setter:B},[_.FLOAT_MAT2]:{Type:Float32Array,size:16,setter:function(t,e){return function(r){t.uniformMatrix2fv(e,!1,r)}}},[_.FLOAT_MAT3]:{Type:Float32Array,size:36,setter:function(t,e){return function(r){t.uniformMatrix3fv(e,!1,r)}}},[_.FLOAT_MAT4]:{Type:Float32Array,size:64,setter:function(t,e){return function(r){t.uniformMatrix4fv(e,!1,r)}}},[_.FLOAT_MAT2X3]:{Type:Float32Array,size:24,setter:function(t,e){return function(r){t.uniformMatrix2x3fv(e,!1,r)}}},[_.FLOAT_MAT2X4]:{Type:Float32Array,size:32,setter:function(t,e){return function(r){t.uniformMatrix2x4fv(e,!1,r)}}},[_.FLOAT_MAT3X2]:{Type:Float32Array,size:24,setter:function(t,e){return function(r){t.uniformMatrix3x2fv(e,!1,r)}}},[_.FLOAT_MAT3X4]:{Type:Float32Array,size:48,setter:function(t,e){return function(r){t.uniformMatrix3x4fv(e,!1,r)}}},[_.FLOAT_MAT4X2]:{Type:Float32Array,size:32,setter:function(t,e){return function(r){t.uniformMatrix4x2fv(e,!1,r)}}},[_.FLOAT_MAT4X3]:{Type:Float32Array,size:48,setter:function(t,e){return function(r){t.uniformMatrix4x3fv(e,!1,r)}}},[_.SAMPLER_2D]:{Type:null,size:0,setter:w,arraySetter:x,bindPoint:_.TEXTURE_2D},[_.SAMPLER_CUBE]:{Type:null,size:0,setter:w,arraySetter:x,bindPoint:_.TEXTURE_CUBE_MAP},[_.SAMPLER_3D]:{Type:null,size:0,setter:w,arraySetter:x,bindPoint:_.TEXTURE_3D},[_.SAMPLER_2D_SHADOW]:{Type:null,size:0,setter:w,arraySetter:x,bindPoint:_.TEXTURE_2D},[_.SAMPLER_2D_ARRAY]:{Type:null,size:0,setter:w,arraySetter:x,bindPoint:_.TEXTURE_2D_ARRAY},[_.SAMPLER_2D_ARRAY_SHADOW]:{Type:null,size:0,setter:w,arraySetter:x,bindPoint:_.TEXTURE_2D_ARRAY},[_.SAMPLER_CUBE_SHADOW]:{Type:null,size:0,setter:w,arraySetter:x,bindPoint:_.TEXTURE_CUBE_MAP},[_.INT_SAMPLER_2D]:{Type:null,size:0,setter:w,arraySetter:x,bindPoint:_.TEXTURE_2D},[_.INT_SAMPLER_3D]:{Type:null,size:0,setter:w,arraySetter:x,bindPoint:_.TEXTURE_3D},[_.INT_SAMPLER_CUBE]:{Type:null,size:0,setter:w,arraySetter:x,bindPoint:_.TEXTURE_CUBE_MAP},[_.INT_SAMPLER_2D_ARRAY]:{Type:null,size:0,setter:w,arraySetter:x,bindPoint:_.TEXTURE_2D_ARRAY},[_.UNSIGNED_INT_SAMPLER_2D]:{Type:null,size:0,setter:w,arraySetter:x,bindPoint:_.TEXTURE_2D},[_.UNSIGNED_INT_SAMPLER_3D]:{Type:null,size:0,setter:w,arraySetter:x,bindPoint:_.TEXTURE_3D},[_.UNSIGNED_INT_SAMPLER_CUBE]:{Type:null,size:0,setter:w,arraySetter:x,bindPoint:_.TEXTURE_CUBE_MAP},[_.UNSIGNED_INT_SAMPLER_2D_ARRAY]:{Type:null,size:0,setter:w,arraySetter:x,bindPoint:_.TEXTURE_2D_ARRAY}};function v(t,e,r){return function(n){t.bindBuffer(t.ARRAY_BUFFER,n.buffer),t.enableVertexAttribArray(e),t.vertexAttribPointer(e,r.itemSize,_.FLOAT,n.normalize||!1,n.stride||0,n.offset||0)}}function G(t,e,r){return function(n){t.bindBuffer(t.ARRAY_BUFFER,n.buffer),t.enableVertexAttribArray(e),t.vertexAttribIPointer(e,r.itemSize,_.INT,n.stride||0,n.offset||0)}}function X(t,e,r){const n=r.size,i=r.count;return function(r){t.bindBuffer(t.ARRAY_BUFFER,r.buffer);const s=n,a=s/i,o=z[_.FLOAT].size*s,u=r.normalize||!1,f=r.offset||0,l=o/i;for(let r=0;r<i;++r)t.enableVertexAttribArray(e+r),t.vertexAttribPointer(e+r,a,_.FLOAT,u,o,f+l*r)}}const V={[_.FLOAT]:{size:4,setter:v,itemSize:1},[_.FLOAT_VEC2]:{size:8,setter:v,itemSize:2},[_.FLOAT_VEC3]:{size:12,setter:v,itemSize:3},[_.FLOAT_VEC4]:{size:16,setter:v,itemSize:4},[_.INT]:{size:4,setter:G,itemSize:1},[_.INT_VEC2]:{size:8,setter:G,itemSize:2},[_.INT_VEC3]:{size:12,setter:G,itemSize:3},[_.INT_VEC4]:{size:16,setter:G,itemSize:4},[_.UNSIGNED_INT]:{size:4,setter:G,itemSize:1},[_.UNSIGNED_INT_VEC2]:{size:8,setter:G,itemSize:2},[_.UNSIGNED_INT_VEC3]:{size:12,setter:G,itemSize:3},[_.UNSIGNED_INT_VEC4]:{size:16,setter:G,itemSize:4},[_.BOOL]:{size:4,setter:G,itemSize:1},[_.BOOL_VEC2]:{size:8,setter:G,itemSize:2},[_.BOOL_VEC3]:{size:12,setter:G,itemSize:3},[_.BOOL_VEC4]:{size:16,setter:G,itemSize:4},[_.FLOAT_MAT2]:{size:4,setter:X,count:2},[_.FLOAT_MAT3]:{size:9,setter:X,count:3},[_.FLOAT_MAT4]:{size:16,setter:X,count:4}};Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Uint16Array,Uint16Array,Uint16Array,Uint16Array,Uint32Array,Uint32Array,Uint32Array,Uint32Array,Uint32Array;function Y(t,e={},r={}){if(null!=e.flipY&&e.flipY!==r.flipY&&t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,e.flipY),e.wrap&&e.wrap!==r.wrap||e.wrapS&&e.wrapS!==r.wrapS||e.wrapT&&e.wrapT!==r.wrapT){let r,n;e.wrap?r=n=e.wrap:(n=e.wrapT||"CLAMP_TO_EDGE",r=e.wrapS||"CLAMP_TO_EDGE"),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t[r]),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t[n])}e.magFilter&&e.magFilter!==r.magFilter&&t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t[e.magFilter]),e.minFilter&&e.minFilter!==r.minFilter&&t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t[e.minFilter])}function k(t,e,r,n){if(null==e.width||null==e.height)return;null==e.frameBuffer&&(e.frameBuffer=t.createFramebuffer()),e.textures||(e.textures=[]),t.bindFramebuffer(t.FRAMEBUFFER,e.frameBuffer),e.textureConfig.type===t.FLOAT&&t.getExtension("OES_texture_float");const i=e.textureConfig.count;if(i>1){const s=t.getExtension("WEBGL_draw_buffers")||{drawBuffersWEBGL(){}},a=[];for(let t=0;t<i;t++)a.push(s[`COLOR_ATTACHMENT${t}_WEBGL`]);s.drawBuffersWEBGL(a);for(let s=0;s<i;s++){null==e.textures[s]&&(e.textures[s]=t.createTexture());const i=e.textures[s];t.bindTexture(t.TEXTURE_2D,i),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,e.width,e.height,0,t.RGBA,e.textureConfig.type,null),Y(t,r,n),t.framebufferTexture2D(t.FRAMEBUFFER,a[s],t.TEXTURE_2D,i,0)}}else{null==e.textures[0]&&(e.textures[0]=t.createTexture());const i=e.textures[0];t.bindTexture(t.TEXTURE_2D,i),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,e.width,e.height,0,t.RGBA,e.textureConfig.type,null),Y(t,r,n),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,i,0)}null==e.depthBuffer&&(e.depthBuffer=t.createRenderbuffer()),t.bindRenderbuffer(t.RENDERBUFFER,e.depthBuffer),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_COMPONENT16,e.width,e.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,e.depthBuffer);const s=t.checkFramebufferStatus(t.FRAMEBUFFER);s!==t.FRAMEBUFFER_COMPLETE&&console.error("framebuffer error",s,r),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,null),t.bindRenderbuffer(t.RENDERBUFFER,null)}function H(t,e){t.deleteFramebuffer(e.frameBuffer),t.deleteRenderbuffer(e.depthBuffer);for(const r of e.textures)t.deleteTexture(r)}function W(t,e){if(e.enable)for(const r of e.enable)t.enable(r);if(e.disable)for(const r of e.disable)t.disable(r);e.blendFunc&&t.blendFunc.apply(t,e.blendFunc),null!=e.depthFunc&&t.depthFunc(e.depthFunc),null!=e.cullFace&&t.cullFace(e.cullFace),null!=e.frontFace&&t.frontFace(e.frontFace),null!=e.lineWidth&&t.lineWidth(e.lineWidth),e.colorMask&&t.colorMask.apply(t,e.colorMask),null!=e.depthMask&&t.depthMask(e.depthMask),e.clearColor&&t.clearColor.apply(t,e.clearColor),null!=e.clearDepth&&t.clearDepth(e.clearDepth),null!=e.clearBits&&t.clear(e.clearBits)}function j(t,e){if(e.enable)for(const r of e.enable)t.disable(r);if(e.disable)for(const r of e.disable)t.enable(r)}let $=1;class K{constructor(t,e="Form"+$++){this.gl=t,this.id=e}update(t){const e=this.gl;t.drawType&&(this.drawType=e[t.drawType]),t.itemCount&&(this.itemCount=t.itemCount),this.attribs=this.attribs||{};for(const r in t.attribs){const n=t.attribs[r];null==this.attribs[r]&&(this.attribs[r]={buffer:e.createBuffer()}),e.bindBuffer(e.ARRAY_BUFFER,this.attribs[r].buffer),e.bufferData(e.ARRAY_BUFFER,n.buffer,e[(n.storeType||"STATIC")+"_DRAW"])}if(t.elements){const r=t.elements.buffer;null==this.elements&&(this.elements={buffer:e.createBuffer(),glType:null}),this.elements.glType=function(t){if(t instanceof Int8Array)return _.BYTE;if(t instanceof Uint8Array)return _.UNSIGNED_BYTE;if(t instanceof Uint8ClampedArray)return _.UNSIGNED_BYTE;if(t instanceof Int16Array)return _.SHORT;if(t instanceof Uint16Array)return _.UNSIGNED_SHORT;if(t instanceof Int32Array)return _.INT;if(t instanceof Uint32Array)return _.UNSIGNED_INT;if(t instanceof Float32Array)return _.FLOAT;throw"unsupported typed array type"}(r),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,this.elements.buffer),e.bufferData(e.ELEMENT_ARRAY_BUFFER,r,e[(t.elements.storeType||"STATIC")+"_DRAW"])}return this}destroy(){for(const t in this.attribs)this.gl.deleteBuffer(this.attribs[t].buffer);this.elements&&this.gl.deleteBuffer(this.elements.buffer)}}let Q=1;class q{constructor(t,e="Shade"+Q++){this.gl=t,this.id=e,this.program=t.createProgram(),this.frag=t.createShader(t.FRAGMENT_SHADER),this.vert=t.createShader(t.VERTEX_SHADER),t.attachShader(this.program,this.vert),t.attachShader(this.program,this.frag)}update(t){const e=this.gl,r=t.frag&&t.frag.trim()||this.fragSource,n=t.vert&&t.vert.trim()||this.vertSource;if(!r||!n)return this;if(r.indexOf("GL_EXT_draw_buffers")>=0&&e.getExtension("WEBGL_draw_buffers"),e.shaderSource(this.vert,n),e.shaderSource(this.frag,r),e.compileShader(this.vert),e.compileShader(this.frag),e.getShaderParameter(this.vert,e.COMPILE_STATUS)||console.error("Error Compiling Vertex Shader!\n",e.getShaderInfoLog(this.vert),J(n)),e.getShaderParameter(this.frag,e.COMPILE_STATUS)||console.error("Error Compiling Fragment Shader!\n",e.getShaderInfoLog(this.frag),J(r)),e.linkProgram(this.program),!e.getProgramParameter(this.program,e.LINK_STATUS)){const t=e.getProgramInfoLog(this.program);console.error("Error in program linking:",t)}return this.uniformSetters=function(t,e){let r=0;function n(e,n){const i=t.getUniformLocation(e,n.name),s=n.size>1&&"[0]"===n.name.substr(-3),a=n.type,o=z[a];if(!o)throw"unknown type: 0x"+a.toString(16);if(null==i)return;let u;if(function(t){return null===t.Type}(o)){const e=r;r+=n.size,u=s?o.arraySetter(t,a,e,i,n.size):o.setter(t,a,e,i)}else u=o.arraySetter&&s?o.arraySetter(t,i):o.setter(t,i);return{setter:u,location:i}}const i={},s=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<s;++r){const s=t.getActiveUniform(e,r);if(!s)continue;let a=s.name;if("[0]"===a.substr(-3)&&(a=a.substr(0,a.length-3)),e){const t=n(e,s);t&&(i[a]=t)}}return i}(e,this.program),this.attributeSetters=function(t,e){const r={},n=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const n=t.getActiveAttrib(e,i);if(!n)break;const s=t.getAttribLocation(e,n.name),a=V[n.type],o=a.setter(t,s,a);r[n.name]={setter:o,location:s}}return r}(e,this.program),this.fragSource=r,this.vertSource=n,this}destroy(){this.gl.deleteProgram(this.program),this.gl.deleteShader(this.frag),this.gl.deleteShader(this.vert)}}function J(t){return t.trim().split("\n").map((t,e)=>e+1+": "+t).join("\n")}let Z=1;class tt{constructor(t="Sketch"+Z++){this.id=t}update(t){return t.drawSettings&&(this.drawSettings=t.drawSettings),t.form&&(this.form=t.form),t.shade&&(this.shade=t.shade),t.uniforms&&(this.uniforms=t.uniforms),this}destroy(){this.form&&this.form.destroy(),this.shade&&this.shade.destroy()}}let et=1;class rt{constructor(t,e="StaticLayer"+et++){this.gl=t,this.id=e,this.data={},this._texture=t.createTexture()}texture(){return this._texture}update(t){return this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture()),t.asset&&(t.wrap||t.wrapS||t.wrapT||(t.wrap=U.wrap),t.minFilter||(t.minFilter=U.minFilter),t.magFilter||(t.magFilter=U.magFilter)),Y(this.gl,t,this.data),t.asset&&this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,t.asset),t.minFilter&&t.minFilter.indexOf("MIPMAP")>0&&this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.bindTexture(this.gl.TEXTURE_2D,null),Object.assign(this.data,t),this}destroy(){this.gl.deleteTexture(this.texture())}}let nt=1;class it{constructor(t,e="DrawingLayer"+nt++){this.gl=t,this.id=e,this.data={}}texture(t=0){return this.targets&&this.targets[0].textures[t]||null}update(t){if(t.buffered&&!this.targets?(this.targets=function(t,e,r=[]){for(let n=0;n<e;n++)r[n]=t(n);return r}(e=>({id:this.id+"_target"+(e+1),width:t.width||this.gl.canvas.width,height:t.height||this.gl.canvas.height,frameBuffer:null,textures:[],depthBuffer:null,textureConfig:{type:t.textureConfig&&t.textureConfig.type||this.gl.UNSIGNED_BYTE,count:t.textureConfig&&t.textureConfig.count||1}}),t.doubleBuffered?2:1),t.wrap||t.wrapS||t.wrapT||(t.wrap=U.wrap),t.minFilter||(t.minFilter=U.minFilter),t.magFilter||(t.magFilter=U.magFilter),this.targets.forEach(e=>k(this.gl,e,t,this.data))):this.targets&&t.width&&t.height&&this.targets.forEach(e=>{e.width=t.width,e.height=t.height,k(this.gl,e,t,this.data)}),t.sketches&&(this.sketches=t.sketches),t.frag){const e=this.sketches&&this.sketches[0];e&&e.shade.update({frag:t.frag,vert:L.basicEffect.vert})}return t.uniforms&&(this.uniforms=t.uniforms),Object.assign(this.data,t),this}destroy(){if(this.sketches)for(const t of this.sketches)t.destroy();this.targets&&(this.targets.forEach(t=>H(this.gl,t)),this.targets=void 0)}}class st{constructor(t){this.gl=t,this.targets=[{id:"MainTarget_1"},{id:"MainTarget_2"}],this.resize(1,!0),this.renderQuad=this.createForm().update(I.renderQuad),this.result=this.createFlatSketch(),this.result.shade.update(L.basicEffect)}resize(t=1,e=!1){const r=this.gl.canvas;return(b(r,t)||e)&&this.targets.forEach(t=>{t.width=r.width,t.height=r.height,t.textureConfig={count:1,type:this.gl.UNSIGNED_BYTE},k(this.gl,t,U)}),this}destroy(){this.result.destroy();for(const t of this.targets)H(this.gl,t)}updateDrawSettings(t){return W(this.gl,Object.assign({},N(this.gl),t)),this}createForm(t){return new K(this.gl,t)}createShade(t){return new q(this.gl,t)}createSketch(t){return new tt(t)}createFlatSketch(t){const e=this.createSketch(t);return e.update({form:this.renderQuad,shade:this.createShade(e.id+"_defaultShade")})}createStaticLayer(t){return new rt(this.gl,t)}createDrawingLayer(t){return new it(this.gl,t)}createEffectLayer(t){const e=this.createDrawingLayer(t);return e.update({sketches:[this.createFlatSketch(e.id+"_effectSketch")]})}draw(t,e){return at(this.gl,t,null,e),this}compose(...t){return function(t,e,r,n){const i=e.length-1;for(let s=0;s<e.length;s++){const a=e[s];if(Array.isArray(a.uniforms)){const e=i+a.uniforms.length-1;a.looping=!1;for(let i=0;i<a.uniforms.length;i++){0;const o=s+i===e;ft(t,a,r,a.uniforms[i],n,o)}}else{const e=s===i;ft(t,a,r,a.uniforms,n,e)}}}(this.gl,t,this.targets,this.result),this}}function at(t,e,r,n){const{shade:i,form:s,drawSettings:a,uniforms:o}=e;if(!i||!s)throw Error("cannot draw, shader or geometry are not set");if(t.useProgram(i.program),function(t,e){for(const r in e.attribs){const n=t.attributeSetters[r];n&&n.setter(e.attribs[r])}}(i,s),n&&ut(i,n,r),a&&W(t,a),Array.isArray(o))for(const n of o)ot(t,e,r,n);else ot(t,e,r,o);a&&j(t,a)}function ot(t,e,r,n){n&&ut(e.shade,n,r),e.form.elements&&null!=e.form.elements.glType?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.form.elements.buffer),t.drawElements(e.form.drawType,e.form.itemCount,e.form.elements.glType,0)):t.drawArrays(e.form.drawType,0,e.form.itemCount)}function ut(t,e,r){for(const n in e){const i=t.uniformSetters[n];if(i){let t=e[n];"function"==typeof t&&(t=t()),null===t||"string"==typeof t?i.setter(r):i.setter(t)}}}function ft(t,e,r,n,i,s){const a=r[0],o=r[1];if(s)t.bindFramebuffer(t.FRAMEBUFFER,null),t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight);else if(e.targets){const r=e.targets.length-1;0,t.bindFramebuffer(t.FRAMEBUFFER,e.targets[r].frameBuffer),t.viewport(0,0,e.targets[r].width,e.targets[r].height)}else t.bindFramebuffer(t.FRAMEBUFFER,o.frameBuffer),t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight);if(e.data.drawSettings&&W(t,e.data.drawSettings),e.sketches)for(const r of e.sketches)at(t,r,e.looping&&e.texture()||a.textures[0],n);else at(t,i,null,{source:e.texture()});if(e.data.drawSettings&&j(t,e.data.drawSettings),!s)if(e.targets){if(2===e.targets.length){const t=e.targets[0];e.targets[0]=e.targets[1],e.targets[1]=t,e.looping=!0}}else r[0]=o,r[1]=a}st.debug=!1,r.d(e,"utils",function(){return lt}),r.d(e,"lib",function(){return ct}),r.d(e,"constants",function(){return Tt}),r.d(e,"painter",function(){return Et});const lt={geometry:{plane:i},stackgl:s,context:a},ct=o,Tt=n,Et=u;e.default=Et}])});