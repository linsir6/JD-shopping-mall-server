import {Controller, Context} from 'egg';
import User from "../model/User";


export default class GoodsController extends Controller {


    async homeIndex(ctx: Context) {
        ctx.body = await ctx.service.goodsService.homeIndex();
        ctx.status = 200;
    }

    async goodsDetails(ctx: Context) {
        ctx.body = await ctx.service.goodsService.goodsDetails(ctx.request.query.goodsId);
        ctx.status = 200;
    }

    async sortIndex(ctx: Context) {
        ctx.body = await ctx.service.goodsService.sortIndex();
        ctx.status = 200;
    }

    async shoppingCarIndex(ctx: Context) {
        ctx.body = await ctx.service.goodsService.shoppingCarIndex(ctx.request.body);
        ctx.status = 200;
    }

    async shoppingCarAdd(ctx: Context) {
        ctx.body = await ctx.service.goodsService.shoppingCarAdd(ctx.request.body);
        ctx.status = 200;
    }

    async shoppingCarDelete(ctx: Context) {
        ctx.body = await ctx.service.goodsService.shoppingCarDelete(ctx.request.body);
        ctx.status = 200;
    }

    async shoppingCarPay(ctx: Context) {
        ctx.body = await ctx.service.goodsService.shoppingCarPay(ctx.request.body);
        ctx.status = 200;
    }


}