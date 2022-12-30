import { Entity, Column } from "typeorm";
import { BaseEntity } from "../../entities";
import IUser from "./iUsers.interface";

@Entity('users')
export default class User extends BaseEntity implements IUser {
    
    @Column({ name: 'first_name', nullable: false })
    firstName: string;
    
    @Column({ name: 'last_name', nullable: true })
    lastName: string;
    
    @Column({ nullable: false })
    username: string;
    
    @Column({ nullable: false })
    email: string;

    @Column({ name: 'is_active', nullable: false })
    isActive: boolean;

    get fullName(): string {
        return this.firstName + this.lastName
    }

}