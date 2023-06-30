import * as Env from 'env-var';

export default () => ({
  apiConfig: {
    port: Env.get('PORT').default(3000).asPortNumber(),
  },
  authConfig: {
    jwtSecret: Env.get('JWT_SECRET').asString(),
    expires: Env.get('JWT_EXPIRES').asString(),
  },
  dbConfig: {
    URL: Env.get('DATABASE_URL').required().asString(),
  },
});
