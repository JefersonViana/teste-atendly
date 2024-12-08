// AMBIENTE DE DESENVOLVIMENTO
import 'dotenv/config';
import * as config from '../config/database';
import { Sequelize } from 'sequelize';
export default new Sequelize(config);