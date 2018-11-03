import * as aLib from './asset-lib';
import * as consts from './contants';
import * as Painter from './painter';
import * as context from './utils/context';
import * as plane from './utils/geometry/plane';
import * as stackgl from './utils/stackgl';
export * from './painter-types';
export declare const utils: {
    geometry: {
        plane: typeof plane;
    };
    stackgl: typeof stackgl;
    context: typeof context;
};
export declare const lib: typeof aLib;
export declare const constants: typeof consts;
export declare const painter: typeof Painter;
export default painter;
