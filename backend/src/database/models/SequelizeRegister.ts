import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class SequelizeRegister extends Model<InferAttributes<SequelizeRegister>,
  InferCreationAttributes<SequelizeRegister>> {
    declare id: CreationOptional<number>;

    declare name: string;

    declare email: string;

    declare password: string;
}

SequelizeRegister.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'registers',
  timestamps: false,
  underscored: true,
});


export default SequelizeRegister;