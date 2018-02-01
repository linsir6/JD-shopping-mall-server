import {Service} from 'egg';
import User from "../model/User";
import {createConnection} from "typeorm";
import Goods from "../model/Goods";
import ShoppingCar from "../model/ShoppingCar";
import Order from "../model/Order";

export default class GoodsService extends Service {


    async homeIndex() {
        const allGoods = await Goods.find({take: 10});
        return {
            code: 0,
            msg: '',
            data: {goods: allGoods}
        };
    }


    async goodsDetails(id: number) {
        const result = await Goods.findOne({id: id});
        if (result) {
            return {
                code: 0,
                msg: '',
                data: {
                    details: result
                }
            }
        } else {
            return {
                code: 1,
                msg: '没有该物品',
                data: {}
            }
        }
    }

    async sortIndex() {
        const allGoods = await Goods.find({});
        return {
            code: 0,
            msg: '',
            data: {goods: allGoods}
        };
    }


    async shoppingCarIndex(user: User) {
        const allGoods = await ShoppingCar.find({userId: user.id})
        return {
            code: 0,
            msg: '',
            data: {goods: allGoods}
        };
    }


    async shoppingCarAdd(car: ShoppingCar) {
        const result = await ShoppingCar.find({userId: car.userId, goodsId: car.goodsId});
        if (result.length === 0) {
            const _car = new ShoppingCar();
            _car.goodsId = car.goodsId;
            _car.userId = car.userId;
            _car.count = car.count;
            await _car.save();
        } else {
            const _car = new ShoppingCar();
            _car.goodsId = car.goodsId;
            _car.userId = car.userId;
            _car.count = car.count;
            _car.id = result[0].id;
            await _car.save();
        }

        return {
            code: 0,
            msg: '',
            data: {}
        };
    }

    async shoppingCarDelete(car: ShoppingCar) {
        const _car = await ShoppingCar.findOne({id: car.id});
        await _car.remove();
        return {
            code: 0,
            msg: '',
            data: {}
        }
    }


    async shoppingCarPay(user: User) {
        const car = await ShoppingCar.find({userId: user.id})
        let total = 0;
        const _describe = [];
        for (const i in car) {
            const goods = await Goods.findOne({id: car[i].goodsId});
            total += car[i].count * goods.price;
            _describe.concat({
                goods: goods,
                count: car[i].count
            });
            await car[i].remove();
        }

        const order = new Order();
        order.total = total;
        order.userId = user.id;
        order.describe = JSON.stringify(_describe);
        await order.save();

    }


}