import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CorsMiddleware } from './middleware/cors.middleware';
import { MongooseModule } from '@nestjs/mongoose';
import { MembershipModule } from './membership/membership.module';
import { OrderModule } from './orders/order.module';


require('dotenv').config();

@Module({
  imports: [ConfigModule, MembershipModule, OrderModule ,MongooseModule.forRoot(process.env.MONGO_URI)],
  controllers: [AppController],
  providers: [AppService],
})

/**App Module Class */
export class AppModule {

  //config Cors Middleware 
  async configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorsMiddleware).forRoutes('*');
  }
  
}
