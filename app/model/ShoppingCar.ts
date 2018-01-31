import {Column, Entity, PrimaryGeneratedColumn, BaseEntity} from 'typeorm';

@Entity()
export default class ShoppingCar extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("int")
    userId: String;

    @Column("int")
    goodsId: number;

    @Column("int")
    count: number;



}