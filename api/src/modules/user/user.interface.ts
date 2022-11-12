import { BaseModel } from '../sequelize/sequelize.interface';

export interface UserProperty {
  email: string;
  username: string;
  password: string;
  is_validated?: boolean;
}

export interface IUser extends BaseModel, UserProperty {}
