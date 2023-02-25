import {
    Body,
    Controller,
    Delete,
    Get,
    NotFoundException,
    HttpException,
    HttpStatus,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
import { Member } from './membership.interface';
import { MembershipService } from './membership.service';


@Controller('/membership')
export class  MembershipController {
//Constructor
constructor(private readonly membershipService: MembershipService) {}

// Endpoint for creating a new member
@Post()
async create(@Body() createdMemberDto: Member): Promise<Member> {
    return this.membershipService.create(createdMemberDto);
}


  } 