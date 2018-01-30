import UserService from './UserService';

declare module 'egg' {

    export interface IService {
        userService: UserService;
    }
}