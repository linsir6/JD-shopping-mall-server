import {Controller, Context} from 'egg';
import User from "../model/User";


export default class GoodsController extends Controller {


    async homeIndex(ctx: Context) {
        const user = ctx.request.body as User;
        ctx.body = '';
        ctx.status = 200;
    }

    async goodsDetails(ctx: Context) {
        const user = ctx.request.body as User;
        ctx.body = '';
        ctx.status = 200;
    }

    async sortIndex(ctx: Context){


    }

    async shoppingCarIndex(){


    }

    async shoppingCarAdd(){


    }

    async shoppingCarDelete(){


    }

    async shoppingCarPay(){


    }




}