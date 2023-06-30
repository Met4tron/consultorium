import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { Logger } from 'nestjs-pino';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.use(helmet());

  app.useLogger(app.get(Logger));

  const env = app.get(ConfigService);

  app.setGlobalPrefix('/api/v1');
  app.useGlobalPipes(new ValidationPipe());

  app.enableShutdownHooks();

  await app.listen(env.get('apiConfig.port'));
}
bootstrap();
