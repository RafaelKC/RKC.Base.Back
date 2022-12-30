import { PrimaryGeneratedColumn } from "typeorm";
import IBaseEntity from "./iEntities.interface";

export abstract class BaseEntity implements IBaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;
    
}