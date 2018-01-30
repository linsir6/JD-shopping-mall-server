import {EggAppConfig} from "egg";
import {join} from 'path';
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

    config.security = {
        csrf: false,
        xframe: false,
    };

    config.typeorm = {
        type: 'mysql',
        host: '127.0.0.1',
        database: 'JD-shopping-mall-DB',
        username: 'root',
        password: 'root',
        logging: true,
        charset: 'UTF8MB4_UNICODE_CI',
        synchronize: true,
        dropSchema: true,
        entities: [
            join(appInfo.baseDir, 'app/model/*.js')
        ],

    };

    return config;
};
