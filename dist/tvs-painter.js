!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.tvsPainter=r():e.tvsPainter=r()}(window,function(){return function(e){var r={};function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var i in e)t.d(n,i,function(r){return e[r]}.bind(null,i));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){"use strict";t.r(r);var n={};t.r(n),t.d(n,"GEOMETRY_PROP_POSITION",function(){return s}),t.d(n,"GEOMETRY_PROP_NORMAL",function(){return T}),t.d(n,"GEOMETRY_PROP_UV",function(){return _}),t.d(n,"UNIFORM_SOURCE_TEXTURE",function(){return E}),t.d(n,"VARYING_UV_COORDS",function(){return l}),t.d(n,"GL_TYPE",function(){return c});var i={};t.r(i),t.d(i,"plane",function(){return A});var a={};t.r(a),t.d(a,"STACK_GL_GEOMETRY_PROP_POSITION",function(){return S}),t.d(a,"STACK_GL_GEOMETRY_PROP_NORMAL",function(){return m}),t.d(a,"STACK_GL_GEOMETRY_PROP_UV",function(){return y}),t.d(a,"STACK_GL_GEOMETRY_PROP_ELEMENTS",function(){return p}),t.d(a,"convertStackGLGeometry",function(){return g});var u={};t.r(u),t.d(u,"getContext",function(){return N}),t.d(u,"makeClear",function(){return F}),t.d(u,"setBlendFunc",function(){return v}),t.d(u,"resizeCanvas",function(){return U});var f={};t.r(f),t.d(f,"defaultTextureSettings",function(){return b}),t.d(f,"getDefaultLayerSettings",function(){return I}),t.d(f,"defaultForms",function(){return L}),t.d(f,"defaultShaders",function(){return M});var o={};t.r(o),t.d(o,"create",function(){return ie});var s="position",T="normal",_="uv",E="source",l="coords",c={FLOAT:5126,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,INT:5124,INT_VEC2:35667,INT_VEC3:35668,INT_VEC4:35669,BOOL:35670,BOOL_VEC2:35671,BOOL_VEC3:35672,BOOL_VEC4:35673,FLOAT_MAT2:35674,FLOAT_MAT3:35675,FLOAT_MAT4:35676,SAMPLER_2D:35678,SAMPLER_CUBE:35680,SAMPLER_3D:35679,SAMPLER_2D_SHADOW:35682,FLOAT_MAT2X3:35685,FLOAT_MAT2X4:35686,FLOAT_MAT3X2:35687,FLOAT_MAT3X4:35688,FLOAT_MAT4X2:35689,FLOAT_MAT4X3:35690,SAMPLER_2D_ARRAY:36289,SAMPLER_2D_ARRAY_SHADOW:36292,SAMPLER_CUBE_SHADOW:36293,UNSIGNED_INT:5125,UNSIGNED_INT_VEC2:36294,UNSIGNED_INT_VEC3:36295,UNSIGNED_INT_VEC4:36296,INT_SAMPLER_2D:36298,INT_SAMPLER_3D:36299,INT_SAMPLER_CUBE:36300,INT_SAMPLER_2D_ARRAY:36303,UNSIGNED_INT_SAMPLER_2D:36306,UNSIGNED_INT_SAMPLER_3D:36307,UNSIGNED_INT_SAMPLER_CUBE:36308,UNSIGNED_INT_SAMPLER_2D_ARRAY:36311,TEXTURE_2D:3553,TEXTURE_CUBE_MAP:34067,TEXTURE_3D:32879,TEXTURE_2D_ARRAY:35866,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,UNSIGNED_SHORT_4_4_4_4:32819,UNSIGNED_SHORT_5_5_5_1:32820,UNSIGNED_SHORT_5_6_5:33635,HALF_FLOAT:5131,UNSIGNED_INT_2_10_10_10_REV:33640,UNSIGNED_INT_10F_11F_11F_REV:35899,UNSIGNED_INT_5_9_9_9_REV:35902,FLOAT_32_UNSIGNED_INT_24_8_REV:36269,UNSIGNED_INT_24_8:34042};function A(e,r,t,n){var i,a,u=e/2,f=r/2,o=t||1,s=n||1,T=o+1,_=s+1,E=e/o,l=r/s,c=new Float32Array(T*_*3),A=new Float32Array(T*_*3),d=new Float32Array(T*_*2),R=0,S=0;for(i=0;i<_;i++){var m=i*l-f;for(a=0;a<T;a++){var y=a*E-u;c[R]=y,c[R+1]=-m,A[R+2]=1,d[S]=a/o,d[S+1]=1-i/s,R+=3,S+=2}}R=0;var p=new(c.length/3>65535?Uint32Array:Uint16Array)(o*s*6);for(i=0;i<s;i++)for(a=0;a<o;a++){var g=a+T*i,N=a+T*(i+1),F=a+1+T*(i+1),v=a+1+T*i;p[R]=g,p[R+1]=N,p[R+2]=v,p[R+3]=N,p[R+4]=F,p[R+5]=v,R+=6}return{attribs:{position:{buffer:c},normal:{buffer:A},uv:{buffer:d}},elements:{buffer:p},drawType:"TRIANGLES",itemCount:p.length}}function d(e,r){void 0===r&&(r=[]);for(var t=0,n=e;t<n.length;t++)for(var i=n[t],a=r.length,u=0;u<i.length;u++)r[u+a]=i[u];return r}var R,S="positions",m="normals",y="uvs",p="cells";function g(e){var r={drawType:"TRIANGLES",attribs:{},itemCount:0};for(var t in e){var n=e[t];if(t===p){var i=new(n.length>65535?Uint32Array:Uint16Array)(d(n));Object.assign(r,{elements:{buffer:i},itemCount:i.length})}else t===S?r.attribs[s]={buffer:new Float32Array(d(n))}:t===m?r.attribs[T]={buffer:new Float32Array(d(n))}:t===y?r.attribs[_]={buffer:new Float32Array(d(n))}:r.attribs[t]={buffer:new Float32Array(d(n))}}return r}function N(e){var r=e.getContext("webgl")||e.getContext("experimental-webgl");if(null==r)throw Error("Webgl context cannot be initialized");return r}function F(e){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];return r.reduce(function(r,t){return r|e[t.toUpperCase()+"_BUFFER_BIT"]},0)}function v(e,r){e.blendFunc.apply(e,r.map(function(r){return e[r.toUpperCase()]}))}function U(e,r){void 0===r&&(r=1),r=Math.max(1,r);var t=e.clientWidth*r|0,n=e.clientHeight*r|0;return(e.width!==t||e.height!==n)&&(e.width=t,e.height=n,!0)}var b={wrap:"CLAMP_TO_EDGE",minFilter:"LINEAR",magFilter:"NEAREST"};function I(e){return{clearColor:[0,0,0,1],enable:[e.DEPTH_TEST],blendFunc:[e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA]}}var h,O,D,L={renderQuad:{attribs:(R={},R[s]={buffer:new Float32Array([-1,1,-1,-1,1,1,1,-1]),storeType:"STATIC"},R[_]={buffer:new Float32Array([0,1,0,0,1,1,1,0]),storeType:"STATIC"},R),drawType:"TRIANGLE_STRIP",itemCount:4}},M={basicEffect:{vert:"\n\t\t\tattribute vec2 "+s+";\n\t\t\tattribute vec2 "+_+";\n\t\t\tvarying vec2 "+l+";\n\t\t\tvoid main() {\n\t\t\t\t"+l+" = "+_+";\n\t\t\t\tgl_Position = vec4("+s+", 0.0, 1.0);\n\t\t\t}",frag:"precision mediump float;\n\t\t\tuniform sampler2D "+E+";\n\t\t\tvarying vec2 "+l+";\n\t\t\tvoid main() {\n\t\t\t\tgl_FragColor = texture2D("+E+", "+l+");\n\t\t\t}"}};function P(e){return X[e].bindPoint}function C(e,r){return function(t){e.uniform1i(r,t)}}function B(e,r){return function(t){e.uniform1iv(r,t)}}function x(e,r){return function(t){e.uniform2iv(r,t)}}function z(e,r){return function(t){e.uniform3iv(r,t)}}function w(e,r){return function(t){e.uniform4iv(r,t)}}function G(e,r,t,n){var i=P(r);return function(r){e.uniform1i(n,t),e.activeTexture(e.TEXTURE0+t),e.bindTexture(i,r)}}function V(e,r,t,n,i){for(var a=P(r),u=new Int32Array(i),f=0;f<i;++f)u[f]=t+f;return function(r){for(var t in e.uniform1iv(n,u),r)e.activeTexture(e.TEXTURE0+u[t]),e.bindTexture(a,r[t])}}var X=((h={})[c.FLOAT]={Type:Float32Array,size:4,setter:function(e,r){return function(t){e.uniform1f(r,t)}},arraySetter:function(e,r){return function(t){e.uniform1fv(r,t)}}},h[c.FLOAT_VEC2]={Type:Float32Array,size:8,setter:function(e,r){return function(t){e.uniform2fv(r,t)}}},h[c.FLOAT_VEC3]={Type:Float32Array,size:12,setter:function(e,r){return function(t){e.uniform3fv(r,t)}}},h[c.FLOAT_VEC4]={Type:Float32Array,size:16,setter:function(e,r){return function(t){e.uniform4fv(r,t)}}},h[c.INT]={Type:Int32Array,size:4,setter:C,arraySetter:B},h[c.INT_VEC2]={Type:Int32Array,size:8,setter:x},h[c.INT_VEC3]={Type:Int32Array,size:12,setter:z},h[c.INT_VEC4]={Type:Int32Array,size:16,setter:w},h[c.UNSIGNED_INT]={Type:Uint32Array,size:4,setter:function(e,r){return function(t){e.uniform1ui(r,t)}},arraySetter:function(e,r){return function(t){e.uniform1uiv(r,t)}}},h[c.UNSIGNED_INT_VEC2]={Type:Uint32Array,size:8,setter:function(e,r){return function(t){e.uniform2uiv(r,t)}}},h[c.UNSIGNED_INT_VEC3]={Type:Uint32Array,size:12,setter:function(e,r){return function(t){e.uniform3uiv(r,t)}}},h[c.UNSIGNED_INT_VEC4]={Type:Uint32Array,size:16,setter:function(e,r){return function(t){e.uniform4uiv(r,t)}}},h[c.BOOL]={Type:Uint32Array,size:4,setter:C,arraySetter:B},h[c.BOOL_VEC2]={Type:Uint32Array,size:8,setter:x},h[c.BOOL_VEC3]={Type:Uint32Array,size:12,setter:z},h[c.BOOL_VEC4]={Type:Uint32Array,size:16,setter:w},h[c.FLOAT_MAT2]={Type:Float32Array,size:16,setter:function(e,r){return function(t){e.uniformMatrix2fv(r,!1,t)}}},h[c.FLOAT_MAT3]={Type:Float32Array,size:36,setter:function(e,r){return function(t){e.uniformMatrix3fv(r,!1,t)}}},h[c.FLOAT_MAT4]={Type:Float32Array,size:64,setter:function(e,r){return function(t){e.uniformMatrix4fv(r,!1,t)}}},h[c.FLOAT_MAT2X3]={Type:Float32Array,size:24,setter:function(e,r){return function(t){e.uniformMatrix2x3fv(r,!1,t)}}},h[c.FLOAT_MAT2X4]={Type:Float32Array,size:32,setter:function(e,r){return function(t){e.uniformMatrix2x4fv(r,!1,t)}}},h[c.FLOAT_MAT3X2]={Type:Float32Array,size:24,setter:function(e,r){return function(t){e.uniformMatrix3x2fv(r,!1,t)}}},h[c.FLOAT_MAT3X4]={Type:Float32Array,size:48,setter:function(e,r){return function(t){e.uniformMatrix3x4fv(r,!1,t)}}},h[c.FLOAT_MAT4X2]={Type:Float32Array,size:32,setter:function(e,r){return function(t){e.uniformMatrix4x2fv(r,!1,t)}}},h[c.FLOAT_MAT4X3]={Type:Float32Array,size:48,setter:function(e,r){return function(t){e.uniformMatrix4x3fv(r,!1,t)}}},h[c.SAMPLER_2D]={Type:null,size:0,setter:G,arraySetter:V,bindPoint:c.TEXTURE_2D},h[c.SAMPLER_CUBE]={Type:null,size:0,setter:G,arraySetter:V,bindPoint:c.TEXTURE_CUBE_MAP},h[c.SAMPLER_3D]={Type:null,size:0,setter:G,arraySetter:V,bindPoint:c.TEXTURE_3D},h[c.SAMPLER_2D_SHADOW]={Type:null,size:0,setter:G,arraySetter:V,bindPoint:c.TEXTURE_2D},h[c.SAMPLER_2D_ARRAY]={Type:null,size:0,setter:G,arraySetter:V,bindPoint:c.TEXTURE_2D_ARRAY},h[c.SAMPLER_2D_ARRAY_SHADOW]={Type:null,size:0,setter:G,arraySetter:V,bindPoint:c.TEXTURE_2D_ARRAY},h[c.SAMPLER_CUBE_SHADOW]={Type:null,size:0,setter:G,arraySetter:V,bindPoint:c.TEXTURE_CUBE_MAP},h[c.INT_SAMPLER_2D]={Type:null,size:0,setter:G,arraySetter:V,bindPoint:c.TEXTURE_2D},h[c.INT_SAMPLER_3D]={Type:null,size:0,setter:G,arraySetter:V,bindPoint:c.TEXTURE_3D},h[c.INT_SAMPLER_CUBE]={Type:null,size:0,setter:G,arraySetter:V,bindPoint:c.TEXTURE_CUBE_MAP},h[c.INT_SAMPLER_2D_ARRAY]={Type:null,size:0,setter:G,arraySetter:V,bindPoint:c.TEXTURE_2D_ARRAY},h[c.UNSIGNED_INT_SAMPLER_2D]={Type:null,size:0,setter:G,arraySetter:V,bindPoint:c.TEXTURE_2D},h[c.UNSIGNED_INT_SAMPLER_3D]={Type:null,size:0,setter:G,arraySetter:V,bindPoint:c.TEXTURE_3D},h[c.UNSIGNED_INT_SAMPLER_CUBE]={Type:null,size:0,setter:G,arraySetter:V,bindPoint:c.TEXTURE_CUBE_MAP},h[c.UNSIGNED_INT_SAMPLER_2D_ARRAY]={Type:null,size:0,setter:G,arraySetter:V,bindPoint:c.TEXTURE_2D_ARRAY},h);function Y(e,r,t){return function(n){e.bindBuffer(e.ARRAY_BUFFER,n.buffer),e.enableVertexAttribArray(r),e.vertexAttribPointer(r,t.itemSize,c.FLOAT,n.normalize||!1,n.stride||0,n.offset||0)}}function H(e,r,t){return function(n){e.bindBuffer(e.ARRAY_BUFFER,n.buffer),e.enableVertexAttribArray(r),e.vertexAttribIPointer(r,t.itemSize,c.INT,n.stride||0,n.offset||0)}}function k(e,r,t){var n=t.size,i=t.count;return function(t){e.bindBuffer(e.ARRAY_BUFFER,t.buffer);for(var a=n,u=a/i,f=X[c.FLOAT].size*a,o=t.normalize||!1,s=t.offset||0,T=f/i,_=0;_<i;++_)e.enableVertexAttribArray(r+_),e.vertexAttribPointer(r+_,u,c.FLOAT,o,f,s+T*_)}}var W=((O={})[c.FLOAT]={size:4,setter:Y,itemSize:1},O[c.FLOAT_VEC2]={size:8,setter:Y,itemSize:2},O[c.FLOAT_VEC3]={size:12,setter:Y,itemSize:3},O[c.FLOAT_VEC4]={size:16,setter:Y,itemSize:4},O[c.INT]={size:4,setter:H,itemSize:1},O[c.INT_VEC2]={size:8,setter:H,itemSize:2},O[c.INT_VEC3]={size:12,setter:H,itemSize:3},O[c.INT_VEC4]={size:16,setter:H,itemSize:4},O[c.UNSIGNED_INT]={size:4,setter:H,itemSize:1},O[c.UNSIGNED_INT_VEC2]={size:8,setter:H,itemSize:2},O[c.UNSIGNED_INT_VEC3]={size:12,setter:H,itemSize:3},O[c.UNSIGNED_INT_VEC4]={size:16,setter:H,itemSize:4},O[c.BOOL]={size:4,setter:H,itemSize:1},O[c.BOOL_VEC2]={size:8,setter:H,itemSize:2},O[c.BOOL_VEC3]={size:12,setter:H,itemSize:3},O[c.BOOL_VEC4]={size:16,setter:H,itemSize:4},O[c.FLOAT_MAT2]={size:4,setter:k,count:2},O[c.FLOAT_MAT3]={size:9,setter:k,count:3},O[c.FLOAT_MAT4]={size:16,setter:k,count:4},O);(D={})[c.BYTE]=Int8Array,D[c.UNSIGNED_BYTE]=Uint8Array,D[c.SHORT]=Int16Array,D[c.UNSIGNED_SHORT]=Uint16Array,D[c.INT]=Int32Array,D[c.UNSIGNED_INT]=Uint32Array,D[c.FLOAT]=Float32Array,D[c.UNSIGNED_SHORT_4_4_4_4]=Uint16Array,D[c.UNSIGNED_SHORT_5_5_5_1]=Uint16Array,D[c.UNSIGNED_SHORT_5_6_5]=Uint16Array,D[c.HALF_FLOAT]=Uint16Array,D[c.UNSIGNED_INT_2_10_10_10_REV]=Uint32Array,D[c.UNSIGNED_INT_10F_11F_11F_REV]=Uint32Array,D[c.UNSIGNED_INT_5_9_9_9_REV]=Uint32Array,D[c.FLOAT_32_UNSIGNED_INT_24_8_REV]=Uint32Array,D[c.UNSIGNED_INT_24_8]=Uint32Array;function j(e,r,t){if(void 0===r&&(r={}),void 0===t&&(t={}),null!=r.flipY&&r.flipY!==t.flipY&&e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r.flipY),r.wrap&&r.wrap!==t.wrap||r.wrapS&&r.wrapS!==t.wrapS||r.wrapT&&r.wrapT!==t.wrapT){var n=void 0,i=void 0;r.wrap?n=i=r.wrap:(i=r.wrapT||"CLAMP_TO_EDGE",n=r.wrapS||"CLAMP_TO_EDGE"),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e[n]),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e[i])}r.magFilter&&r.magFilter!==t.magFilter&&e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e[r.magFilter]),r.minFilter&&r.minFilter!==t.minFilter&&e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e[r.minFilter])}function K(e,r,t,n){if(null!=r.width&&null!=r.height){null==r.frameBuffer&&(r.frameBuffer=e.createFramebuffer()),r.textures||(r.textures=[]),e.bindFramebuffer(e.FRAMEBUFFER,r.frameBuffer),r.textureConfig.type===e.FLOAT&&e.getExtension("OES_texture_float");var i=r.textureConfig.count;if(i>1){for(var a=e.getExtension("WEBGL_draw_buffers")||{drawBuffersWEBGL:function(){}},u=[],f=0;f<i;f++)u.push(a["COLOR_ATTACHMENT"+f+"_WEBGL"]);a.drawBuffersWEBGL(u);for(f=0;f<i;f++){null==r.textures[f]&&(r.textures[f]=e.createTexture());var o=r.textures[f];e.bindTexture(e.TEXTURE_2D,o),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,r.width,r.height,0,e.RGBA,r.textureConfig.type,null),j(e,t,n),e.framebufferTexture2D(e.FRAMEBUFFER,u[f],e.TEXTURE_2D,o,0)}}else{null==r.textures[0]&&(r.textures[0]=e.createTexture());o=r.textures[0];e.bindTexture(e.TEXTURE_2D,o),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,r.width,r.height,0,e.RGBA,r.textureConfig.type,null),j(e,t,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,o,0)}null==r.depthBuffer&&(r.depthBuffer=e.createRenderbuffer()),e.bindRenderbuffer(e.RENDERBUFFER,r.depthBuffer),e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_COMPONENT16,r.width,r.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,r.depthBuffer);var s=e.checkFramebufferStatus(e.FRAMEBUFFER);s!==e.FRAMEBUFFER_COMPLETE&&console.error("framebuffer error",s,t),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindTexture(e.TEXTURE_2D,null),e.bindRenderbuffer(e.RENDERBUFFER,null)}}function Q(e,r){e.deleteFramebuffer(r.frameBuffer),e.deleteRenderbuffer(r.depthBuffer);for(var t=0,n=r.textures;t<n.length;t++){var i=n[t];e.deleteTexture(i)}}function q(e,r){if(r.enable)for(var t=0,n=r.enable;t<n.length;t++){var i=n[t];e.enable(i)}if(r.disable)for(var a=0,u=r.disable;a<u.length;a++){i=u[a];e.disable(i)}r.blendFunc&&e.blendFunc.apply(e,r.blendFunc),null!=r.depthFunc&&e.depthFunc(r.depthFunc),null!=r.cullFace&&e.cullFace(r.cullFace),null!=r.frontFace&&e.frontFace(r.frontFace),null!=r.lineWidth&&e.lineWidth(r.lineWidth),r.colorMask&&e.colorMask.apply(e,r.colorMask),null!=r.depthMask&&e.depthMask(r.depthMask),r.clearColor&&e.clearColor.apply(e,r.clearColor),null!=r.clearDepth&&e.clearDepth(r.clearDepth),null!=r.clearBits&&e.clear(r.clearBits)}function J(e,r){if(r.enable)for(var t=0,n=r.enable;t<n.length;t++){var i=n[t];e.disable(i)}if(r.disable)for(var a=0,u=r.disable;a<u.length;a++){i=u[a];e.enable(i)}}function Z(e){var r={};return r.update=function(t){t.drawType&&(r.drawType=e[t.drawType]),t.itemCount&&(r.itemCount=t.itemCount);var n=r.attribs||{};for(var i in t.attribs){var a=t.attribs[i];null==n[i]&&(n[i]={buffer:e.createBuffer()}),e.bindBuffer(e.ARRAY_BUFFER,n[i].buffer),e.bufferData(e.ARRAY_BUFFER,a.buffer,e[(a.storeType||"STATIC")+"_DRAW"])}if(r.attribs=n,t.elements){var u=t.elements.buffer;null==r.elements&&(r.elements={buffer:e.createBuffer(),glType:null}),r.elements.glType=function(e){if(e instanceof Int8Array)return c.BYTE;if(e instanceof Uint8Array)return c.UNSIGNED_BYTE;if(e instanceof Uint8ClampedArray)return c.UNSIGNED_BYTE;if(e instanceof Int16Array)return c.SHORT;if(e instanceof Uint16Array)return c.UNSIGNED_SHORT;if(e instanceof Int32Array)return c.INT;if(e instanceof Uint32Array)return c.UNSIGNED_INT;if(e instanceof Float32Array)return c.FLOAT;throw"unsupported typed array type"}(u),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,r.elements.buffer),e.bufferData(e.ELEMENT_ARRAY_BUFFER,u,e[(t.elements.storeType||"STATIC")+"_DRAW"])}return r},r.destroy=function(){for(var t in r.attribs)e.deleteBuffer(r.attribs[t].buffer);return r.elements&&e.deleteBuffer(r.elements.buffer),r},r}function $(e){var r={program:e.createProgram(),frag:e.createShader(e.FRAGMENT_SHADER),vert:e.createShader(e.VERTEX_SHADER)};return e.attachShader(r.program,r.vert),e.attachShader(r.program,r.frag),r.update=function(t){var n=t.frag&&t.frag.trim()||r.fragSource,i=t.vert&&t.vert.trim()||r.vertSource;if(!n||!i)return r;if(n.indexOf("GL_EXT_draw_buffers")>=0&&e.getExtension("WEBGL_draw_buffers"),e.shaderSource(r.vert,i),e.shaderSource(r.frag,n),e.compileShader(r.vert),e.compileShader(r.frag),e.getShaderParameter(r.vert,e.COMPILE_STATUS)||console.error("Error Compiling Vertex Shader!\n",e.getShaderInfoLog(r.vert),ee(i)),e.getShaderParameter(r.frag,e.COMPILE_STATUS)||console.error("Error Compiling Fragment Shader!\n",e.getShaderInfoLog(r.frag),ee(n)),e.linkProgram(r.program),!e.getProgramParameter(r.program,e.LINK_STATUS)){var a=e.getProgramInfoLog(r.program);console.error("Error in program linking:",a)}return r.uniformSetters=function(e,r){var t=0;function n(r,n){var i=e.getUniformLocation(r,n.name),a=n.size>1&&"[0]"===n.name.substr(-3),u=n.type,f=X[u];if(!f)throw"unknown type: 0x"+u.toString(16);if(null!=i){var o;if(null===f.Type){var s=t;t+=n.size,o=a?f.arraySetter(e,u,s,i,n.size):f.setter(e,u,s,i)}else o=f.arraySetter&&a?f.arraySetter(e,i):f.setter(e,i);return{setter:o,location:i}}}for(var i={},a=e.getProgramParameter(r,e.ACTIVE_UNIFORMS),u=0;u<a;++u){var f=e.getActiveUniform(r,u);if(!f)break;var o=f.name;if("[0]"===o.substr(-3)&&(o=o.substr(0,o.length-3)),r){var s=n(r,f);s&&(i[o]=s)}}return i}(e,r.program),r.attributeSetters=function(e,r){for(var t={},n=e.getProgramParameter(r,e.ACTIVE_ATTRIBUTES),i=0;i<n;i++){var a=e.getActiveAttrib(r,i);if(!a)break;var u=e.getAttribLocation(r,a.name),f=W[a.type],o=f.setter(e,u,f);t[a.name]={setter:o,location:u}}return t}(e,r.program),r.fragSource=n,r.vertSource=i,r},r.destroy=function(){e.deleteProgram(r.program),e.deleteShader(r.frag),e.deleteShader(r.vert)},r}function ee(e){return e.trim().split("\n").map(function(e,r){return r+1+": "+e}).join("\n")}function re(){var e={update:function(r){return r.drawSettings&&(e.drawSettings=r.drawSettings),r.form&&(e.form=r.form),r.shade&&(e.shade=r.shade),r.uniforms&&(e.uniforms=r.uniforms),e},destroy:function(){e.form&&e.form.destroy(),e.shade&&e.shade.destroy()}};return e}function te(e){var r={textures:[],data:{},texture:function(e){return void 0===e&&(e=0),r.textures[e]},update:function(t){if(t.buffered&&!r.target?(r.target={width:t.width||e.canvas.width,height:t.height||e.canvas.height,frameBuffer:null,textures:[],depthBuffer:null,textureConfig:{type:t.textureConfig&&t.textureConfig.type||e.UNSIGNED_BYTE,count:t.textureConfig&&t.textureConfig.count||1}},K(e,r.target,t,r.data),r.textures=r.target.textures):r.target&&t.width&&t.height&&(r.target.width=t.width,r.target.height=t.height,K(e,r.target,t,r.data)),t.sketches&&(r.sketches=t.sketches),t.frag){var n=r.sketches&&r.sketches[0];n&&n.shade.update({frag:t.frag})}return t.uniforms&&(r.uniforms=t.uniforms),Object.assign(r.data,t),r},destroy:function(){if(r.sketches)for(var t=0,n=r.sketches;t<n.length;t++){n[t].destroy()}if(r.target)Q(e,r.target);else for(var i=0,a=r.textures;i<a.length;i++){var u=a[i];e.deleteTexture(u)}}};return r}var ne=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e};function ie(e){var r=[{},{}],t=I(e),n=Z(e).update(L.renderQuad),i=function(){return re().update({form:n,shade:$(e).update(M.basicEffect)})},a=i(),u=function(t,n){void 0===t&&(t=1),void 0===n&&(n=!1);var i=e.canvas;return(U(i,t)||n)&&r.forEach(function(r){r.width=i.width,r.height=i.height,r.textureConfig={count:1,type:e.UNSIGNED_BYTE},K(e,r,b)}),f};u(1,!0);var f={gl:e,updateDrawSettings:function(r){return q(e,ne({},t,r)),f},createForm:function(){return Z(e)},createShade:function(){return $(e)},createSketch:function(){return re()},createFlatSketch:i,createStaticLayer:function(){return function(e){var r={},t=e.createTexture();return r.textures=[t],r.data={},r.texture=function(){return t},r.update=function(n){return e.bindTexture(e.TEXTURE_2D,t),j(e,n,r.data),n.asset&&e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,n.asset),n.minFilter&&n.minFilter.indexOf("MIPMAP")>0&&e.generateMipmap(e.TEXTURE_2D),e.bindTexture(e.TEXTURE_2D,null),Object.assign(r.data,n),r},r.destroy=function(){e.deleteTexture(t)},r}(e)},createDrawingLayer:function(){return te(e)},createEffectLayer:function(){return te(e).update({sketches:[i()]})},draw:function(r,t){return ae(e,r,null,t),f},compose:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return function(e,r,t,n){for(var i=r.length-1,a=function(a){var u=r[a],f=function(r,i){var a=t[0],f=t[1],o=!i&&null==u.target;if(i?(e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,e.drawingBufferWidth,e.drawingBufferHeight)):u.target?(e.bindFramebuffer(e.FRAMEBUFFER,u.target.frameBuffer),e.viewport(0,0,u.target.width,u.target.height)):(e.bindFramebuffer(e.FRAMEBUFFER,f.frameBuffer),e.viewport(0,0,e.drawingBufferWidth,e.drawingBufferHeight)),u.data.drawSettings&&q(e,u.data.drawSettings),u.sketches)for(var s=0,T=u.sketches;s<T.length;s++){var _=T[s];ae(e,_,a.textures[0],r)}else ae(e,n,null,{source:u.texture()});u.data.drawSettings&&J(e,u.data.drawSettings),o&&(t[0]=f,t[1]=a)};if(Array.isArray(u.uniforms))for(var o=i+u.uniforms.length-1,s=0;s<u.uniforms.length;s++){var T=a+s===o;f(u.uniforms[s],T)}else{var T=a===i;f(u.uniforms,T)}},u=0;u<r.length;u++)a(u)}(e,t,r,a),f},resize:u,destroy:function(){a.destroy();for(var t=0,n=r;t<n.length;t++){var i=n[t];Q(e,i)}}};return f}function ae(e,r,t,n){var i=r.shade,a=r.uniforms,u=r.form,f=r.drawSettings;if(!i||!u)throw Error("cannot draw, shader or geometry are not set");if(e.useProgram(i.program),function(e,r){for(var t in r.attribs){var n=e.attributeSetters[t];n&&n.setter(r.attribs[t])}}(i,u),n&&fe(i,n,t),f&&q(e,f),Array.isArray(a))for(var o=0,s=a;o<s.length;o++){ue(e,r,t,s[o])}else ue(e,r,t,a);f&&J(e,f)}function ue(e,r,t,n){n&&fe(r.shade,n,t),r.form.elements&&null!=r.form.elements.glType?(e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,r.form.elements.buffer),e.drawElements(r.form.drawType,r.form.itemCount,r.form.elements.glType,0)):e.drawArrays(r.form.drawType,0,r.form.itemCount)}function fe(e,r,t){for(var n in r){var i=e.uniformSetters[n];if(i){var a=r[n];null===a||"string"==typeof a?i.setter(t):i.setter(a)}}}t.d(r,"utils",function(){return oe}),t.d(r,"lib",function(){return se}),t.d(r,"constants",function(){return Te}),t.d(r,"painter",function(){return _e});var oe={geometry:{plane:i},stackgl:a,context:u},se=f,Te=n,_e=o;r.default=_e}])});