import {Column, Entity, PrimaryGeneratedColumn, BaseEntity} from 'typeorm';

@Entity()
export default class Order extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("int")
    userId: number;

    @Column("int")
    total: number;

    @Column("varchar")
    describe: String;


}