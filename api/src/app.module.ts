import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MembershipController } from './membership/membership.controller';
import { MembershipService } from './membership/membership.service';
import { CorsMiddleware } from './middleware/cors.middleware';

@Module({
  imports: [ConfigModule],
  controllers: [AppController, MembershipController],
  providers: [AppService, MembershipService],
})

export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorsMiddleware).forRoutes('*')
  }
}
