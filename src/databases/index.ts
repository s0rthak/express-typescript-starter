import config from '../config';
import Sequelize from 'sequelize';
import { logger } from '../utils/logger';
import ComputerGroupsModel from 'models/computer_groups.model';

const { host, user, password, database, pool } = config.dbConfig;
const sequelize = new Sequelize.Sequelize(database, user, password, {
  host: host,
  dialect: 'postgres',
  pool: {
    min: pool.min,
    max: pool.max,
  },
  logQueryParameters: process.env.NODE_ENV === 'development',
  logging: (query, time) => {
    logger.info(time + 'ms' + ' ' + query);
  },
  benchmark: true,
});

sequelize.authenticate();

const DB = {
  ComputerGroups: ComputerGroupsModel(sequelize),
  sequelize, // connection instance (RAW queries)
  Sequelize, // library
};

export default DB;
