import { Transform } from "class-transformer";
import { IsNumber, IsOptional } from "class-validator";

export default class PagedGetListInput {
  @IsNumber()
  @Transform((param) => Number(param.value))
  @IsOptional()
  maxResultCount: number;

  @IsNumber()
  @Transform((param) => Number(param.value))
  @IsOptional()
  skipResultCount: number;

  constructor() {
    this.maxResultCount = 50;
    this.skipResultCount = 0;
  }
}
