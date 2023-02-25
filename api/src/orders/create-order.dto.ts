import { IsNotEmpty, IsNumber } from "class-validator";

//Data Transfer Object for create member
// @Decorators used for validation to ensure data is not empty and in valid form
export class CreateOrderDTO {
  @IsNotEmpty()
  items: { name: string; price: number; quantity: number }[];

  @IsNotEmpty()
  @IsNumber()
  total: number;
}
