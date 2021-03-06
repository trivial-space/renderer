import { AttribSetter, DrawSettings, GL, UniformSetter } from './painter-types';
export declare function createUniformSetters(gl: GL, program: WebGLProgram): {
    [id: string]: UniformSetter;
};
export declare function createAttributeSetters(gl: GL, program: WebGLProgram): {
    [id: string]: AttribSetter;
};
export declare const glTypeToTypedArray: {
    [x: number]: Int8ArrayConstructor | Uint8ArrayConstructor | Int16ArrayConstructor | Uint16ArrayConstructor | Int32ArrayConstructor | Uint32ArrayConstructor | Float32ArrayConstructor;
};
export declare function getGLTypeForTypedArray(typedArray: any): number;
export declare function getGLTypeForTypedArrayType(typedArrayType: any): number;
export declare function applyDrawSettings(gl: GL, settings: DrawSettings): void;
export declare function revertDrawSettings(gl: GL, settings: DrawSettings): void;
