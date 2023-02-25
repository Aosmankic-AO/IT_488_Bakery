import { Module } from '@nestjs/common';
import { MembershipController } from './membership.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MemberSchema } from './membership.schema';
import { MembershipService } from './membership.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Member', schema: MemberSchema }]),
  ],
  controllers: [MembershipController],
  providers: [MembershipService],
})
export class MembershipModule {}
