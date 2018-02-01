'use strict';
import {Application} from 'egg';
import UserController from './controller/UserController';
import GoodsController from "./controller/GoodsController";


declare module 'egg' {

    export interface IController {
        userController: UserController;
        goodsController: GoodsController;
    }
}


export default (app: Application) => {
    const {
        controller: {
            userController, goodsController
        }
    } = app;

    /**
     * 用户相关
     */
    app.post('/user/register', userController.register);
    app.post('/user/login', userController.login);
    app.get('/home/index', goodsController.homeIndex);
    app.post('/goods/details', goodsController.goodsDetails);
    app.post('/sort/index', goodsController.sortIndex);
    app.post('/shopping/index', goodsController.shoppingCarIndex);
    app.post('/shopping/add', goodsController.shoppingCarAdd);
    app.post('/shopping/delete', goodsController.shoppingCarDelete);
    app.post('/shopping/pay', goodsController.shoppingCarPay);


};
