import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateMemberDTO } from "./create-member.dto";
import { Member } from "./membership.interface";

//CRUD Create, Read, Update, Delete opertations for Membership

@Injectable()
export class MembershipService {
    // Membership service constructor
    // Injecting Member schema model
    constructor(@InjectModel('Member') private readonly memberModel: Model<Member>){}

    // Create a new member
    async create(createMemberDTO: CreateMemberDTO): Promise<Member> {
        const createdMember = new this.memberModel(createMemberDTO);
        console.log('MembershipService: Saving to DB ' + createdMember);
        return createdMember.save();
    }

}