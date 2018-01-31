import UserService from './UserService';

declare module 'egg' {

    import GoodsService from "./GoodsService";

    export interface IService {
        userService: UserService;
        goodsService: GoodsService;

    }
}