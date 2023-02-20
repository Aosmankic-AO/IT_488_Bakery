import { CreateMemberDto } from "src/dtos/create-member.dto";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Member } from "src/entities/member.entity";
//CRUD Create, Read, Update, Delete operations
import {Injectable} from "@nestjs/common";

@Injectable()
export class MembershipService {
    //constructor
    constructor(@InjectRepository(Member) 
    private memberRepositpry: Repository<Member>,) {}

    async create(createMemberDto: CreateMemberDto): Promise<Member> {
        const member = this.memberRepositpry.create(createMemberDto);
        return this.memberRepositpry.save(member);
    }

}
