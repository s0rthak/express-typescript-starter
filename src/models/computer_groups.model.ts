import { Sequelize, DataTypes, Model } from 'sequelize';

export interface ComputerGroup {
  id: number;
  name: string;
}

export type ComputerCreationAttributions = Pick<ComputerGroup, 'name'>;

export class ComputerGroupModel extends Model<ComputerGroup, ComputerCreationAttributions> implements ComputerGroup {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public name!: string;
}

export default function (sequelize: Sequelize): typeof ComputerGroupModel {
  ComputerGroupModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      tableName: 'computer_groups',
      sequelize,
    },
  );

  return ComputerGroupModel;
}
