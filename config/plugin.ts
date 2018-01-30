'use strict';

// had enabled by egg
// exports.static = true;

declare module 'egg' {
    export interface Context {
        validate: Function
    }
}

const typeorm = {
    enable: true,
    package: 'typeorm',
};


export {

}
