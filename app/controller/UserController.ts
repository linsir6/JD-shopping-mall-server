import {Controller, Context} from 'egg';


export default class UserController extends Controller {


    async login(ctx: Context) {
        ctx.body = 'success';
        ctx.status = 200;
    }



}