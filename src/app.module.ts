import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';
import { DatabaseModule } from './common/database/database.module';
import environment from './config/environment';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [environment],
      cache: true,
    }),
    LoggerModule.forRoot(),
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
