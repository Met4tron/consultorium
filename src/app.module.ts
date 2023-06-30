import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from 'nestjs-pino';
import environment from './config/environment';
import typeorm from './config/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [environment, typeorm],
      cache: true,
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('typeorm'),
      inject: [ConfigService],
    }),
    LoggerModule.forRoot(),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
