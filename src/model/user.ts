import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    idUser: number
    @Column({type : "varchar", length :255})
    name: string
    @Column({type : "int"})
    password: string
    @Column({type : "text", nullable: null})
    image: string;
    @Column({default: "user"})
    role: string;

}