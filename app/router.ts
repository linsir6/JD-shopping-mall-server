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
     * 用户相关
     */
    app.post('/user/register', userController.register);
    app.post('/user/login', userController.login);


};
