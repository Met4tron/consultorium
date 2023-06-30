import 'dotenv/config';
import { registerAs } from '@nestjs/config';
import * as Env from 'env-var';
import { DataSource, DataSourceOptions } from 'typeorm';

const config = {
  type: 'postgres',
  host: Env.get('DB_HOST').required().asString(),
  user: Env.get('DB_USER').required().asString(),
  password: Env.get('DB_PASSWORD').required().asString(),
  database: Env.get('DB_NAME').required().asString(),
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  autoLoadEntities: true,
  synchronize: false,
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
