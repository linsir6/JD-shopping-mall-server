import {Column, Entity, PrimaryGeneratedColumn, BaseEntity} from 'typeorm';

@Entity()
export default class Goods extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    name: String;

    @Column("int")
    price: number;

    @Column("int")
    count: number;

    @Column("int")
    type: number;

    @Column("varchar")
    describe: String;

}