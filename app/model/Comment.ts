import {Column, Entity, PrimaryGeneratedColumn, BaseEntity} from 'typeorm';

@Entity()
export default class Comment extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    name: String;

    @Column("varchar")
    phone: String;

    @Column("varchar")
    password: String;


}