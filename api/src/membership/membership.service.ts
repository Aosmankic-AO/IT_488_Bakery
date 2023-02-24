import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Member } from "./membership.interface";

//CRUD Create, Read, Update, Delete opertations for Membership

@Injectable()
export class MembershipService {
    // Membership service constructor
    constructor(){}

    // Create a new member
    async create(member: Member): Promise<Member> {
        console.log('Test from MembershipService: ');
        console.log(member.dob);
    
        return;
    }

}