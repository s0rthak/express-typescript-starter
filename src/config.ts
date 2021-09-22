const config = {
  env: 'development',
  dbConfig: {
    host: 'postgres',
    user: 'root',
    password: 'password',
    database: 'sequelize',
    pool: {
      min: 0,
      max: 5,
    },
  },
  log: {
    format: 'dev',
    dir: '../logs',
  },
} as const;

export default config;
