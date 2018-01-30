import {Application} from 'egg';
import {createConnection, Connection} from 'typeorm';

declare module 'egg' {
    export interface Application {
        app: Application;
    }
}
export default async (app: Application) => {

    app.beforeStart(async () => {
        const connection: Connection = await createConnection(app.config.typeorm);

        // app.typeorm
        Object.defineProperty(app, 'model', {
            value: connection,
            writable: false,
            configurable: false,
        });

        app.coreLogger.info('egg-typeorm: connection created.')

    });
};