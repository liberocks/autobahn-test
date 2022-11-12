import { Column, DataType, Table } from 'sequelize-typescript';

import { BaseModel } from '../sequelize/sequelize.class';

import { IUser } from './user.interface';

@Table({ tableName: 'user' })
export class User extends BaseModel<User> implements IUser {
  @Column({
    type: DataType.STRING,
  })
  email: string;

  @Column({
    type: DataType.STRING,
  })
  username: string;

  @Column({
    type: DataType.STRING,
  })
  password: string;
}

export default User;
