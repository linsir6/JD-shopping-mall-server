import {Column, Entity, PrimaryGeneratedColumn, BaseEntity} from 'typeorm';

@Entity('user')
export default class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    name: String;

    @Column("varchar")
    phone: String;

    @Column("varchar")
    password: String;


}