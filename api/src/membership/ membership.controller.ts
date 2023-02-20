import { Body, Controller, Post } from '@nestjs/common';
import { MembershipService } from './membership.service';
import { CreateMemberDto } from '../dtos/create-member.dto';

@Controller('/membership')
export class MembershipController {
    constructor(private readonly memberService: MembershipService) {}

    // Post new member to DB
    @Post()
    async create(@Body() createMemberDto: CreateMemberDto) {
        return this.memberService.create(createMemberDto);
    }
}
