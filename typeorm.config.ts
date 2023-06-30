import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: configService.get('dbConfig.host'),
  port: configService.get('dbConfig.port'),
  username: configService.get('dbConfig.user'),
  password: configService.get('dbConfig.password'),
  database: configService.get('dbConfig.schema'),
  entities: [],
});
