import { Controller, Post } from "@nestjs/common";
import { OrdersService } from "./orders.service";

@Controller('/orders')
export class OrdersController {
    //Constructor
    constructor(private readonly ordersService: OrdersService) {}

    //Endpoint for submitting the cart contents to DB
    @Post()
    async create() {
        console.log('test')
    }
}