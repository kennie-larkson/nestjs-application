import {
  Module,
  NestModule,
  RequestMethod,
  MiddlewareConsumer,
} from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { sequelizeModule } from './database/database.config';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { UserController } from './user/user.controller';

@Module({
  imports: [AuthModule, UserModule, sequelizeModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(UserController);
    // .forRoutes({ path: '*', method: RequestMethod.GET });
  }
}
