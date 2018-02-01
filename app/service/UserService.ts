import {Service} from 'egg';
import User from "../model/User";
import {createConnection} from "typeorm";

export default class UserService extends Service {


    async register(user: User) {
        const _user = new User();
        _user.password = user.password;
        _user.name = '未设置昵称';
        _user.phone = user.phone;
        const result = await User.find({phone: user.phone});
        if (result.length === 0) {
            await _user.save();
            return {
                code: 0,
                msg: '',
                data: {}
            }
        } else {
            return {
                code: 1,
                msg: '该用户已经存在',
                data: {}
            }
        }
    }


    async login(user: User) {
        const result = await User.find({phone: user.phone, password: user.password});
        if (result.length === 1) {
            return {
                code: 0,
                msg: '登录成功',
                data: {}
            }
        } else {
            return {
                code: 1,
                msg: '该用户不存在',
                data: {}
            }
        }
    }

}