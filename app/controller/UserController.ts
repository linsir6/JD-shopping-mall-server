import {Controller, Context} from 'egg';
import User from "../model/User";


export default class UserController extends Controller {


    async login(ctx: Context) {
        const user = ctx.request.body as User;
        ctx.body = ctx.service.userService.login(user);
        ctx.status = 200;
    }

    async register(ctx: Context) {
        const user = ctx.request.body as User;
        ctx.body = ctx.service.userService.register(user);
        ctx.status = 200;
    }


}