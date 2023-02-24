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
//Consturctor
constructor(private readonly membershipService: MembershipService) {}

// Testing
@Post()
async create(@Body() createdMemberDto: Member): Promise<Member> {
    console.log('Test from membership.controller: ');
    console.log(createdMemberDto.name);
    return this.membershipService.create(createdMemberDto);
}


  } 