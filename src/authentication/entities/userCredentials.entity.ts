import { Entity, Column } from "typeorm";
import { BaseEntity } from "../../entities";
import IUserCredential from "./iUserCredentials.interface";

@Entity('users_credemtials')
export default class UserCredential extends BaseEntity implements IUserCredential {

    @Column({ name: 'user_id', nullable: false, type: 'uuid' })
    userId: string;

    @Column({ name: 'encrypted_password', nullable: false,})
    encryptedPassword: string;

}