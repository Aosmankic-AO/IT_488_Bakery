import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateOrderDTO } from "./create-order.dto";
import { Order } from "./orders.interface";

//CRUD Create, Read, Update, Delete opertations for Orders
@Injectable()
export class OrdersService {
    // Membership service constructor
    // Injecting Order schema model
    constructor(@InjectModel('Order') private readonly orderModel: Model<Order>){}

    //Create a new order
    async create(createOrderDTO: CreateOrderDTO): Promise<Order> {
        const createdOrder = new this.orderModel(createOrderDTO);

        console.log('Hello from MembershipService: ' + createdOrder);
        return createdOrder.save();
    }

}
