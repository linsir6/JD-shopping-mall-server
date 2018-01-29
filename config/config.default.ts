import {EggAppConfig} from "egg";

declare module 'egg' {
    export interface EggAppConfig {

    }
}
export default (appInfo: EggAppConfig) => {
    const config: any = exports = {};

    config.keys = appInfo.name + 'linsir';

    config.logger = {
        level: 'NONE',
        consoleLevel: 'INFO',
        disableConsoleAfterReady: false,
    };

    return config;
};
