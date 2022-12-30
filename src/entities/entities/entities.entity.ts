import { PrimaryGeneratedColumn } from "typeorm";
import IBaseEntity from "./iEntities.interface";

export default abstract class BaseEntity implements IBaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;
    
}