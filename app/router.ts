'use strict';
import {Application} from 'egg';
import UserController from './controller/UserController';


declare module 'egg' {
    export interface IController {
        userController: UserController;
    }
}


export default (app: Application) => {
    const {
        controller: {
            userController
        }
    } = app;

    /**
     * 关注回复相关
     */
    app.get('/login', userController.login);


};
