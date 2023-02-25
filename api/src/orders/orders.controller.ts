import { Body, Controller, Post } from "@nestjs/common";
import { CreateOrderDTO } from "./create-order.dto";
import { Order } from "./orders.interface";
import { OrdersService } from "./orders.service";

@Controller('/orders')
export class OrdersController {
    //Constructor
    constructor(private readonly ordersService: OrdersService) {}

    //Endpoint for submitting the cart contents to DB
    @Post()
    async create(@Body() createOrderDTO: CreateOrderDTO): Promise<Order> {
        console.log('Hello from OrdersController')
        return this.ordersService.create(createOrderDTO)
    }
}