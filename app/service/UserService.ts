import {Service} from 'egg';
import User from "../model/User";
import {createConnection} from "typeorm";

export default class Menu extends Service {


    async register(user: User) {
        const _user = new User();
        _user.password = user.password;
        _user.name = '未设置昵称';
        _user.phone = user.phone;
        _user.id = 1;
        //await _user.save();
        return await _user.save();
    }


    async login(user: User) {

        return '';
    }

}