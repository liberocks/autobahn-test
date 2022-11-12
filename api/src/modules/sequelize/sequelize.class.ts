import {
  Column,
  CreatedAt,
  DeletedAt,
  DataType,
  Model,
  UpdatedAt,
} from 'sequelize-typescript';
import { FindOptions, Transaction } from 'sequelize';
import { MakeNullishOptional } from 'sequelize/types/utils';

import { NonAbstractTypeOfModel, Repository } from './sequelize.interface';

export class BaseModel<T extends Model<T>> extends Model<T> {
  @Column({
    type: DataType.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date | null;

  @DeletedAt
  deleted_at: Date | null;
}

export class BaseRepository<T extends Model<T>> implements Repository<T> {
  constructor(public readonly Model: NonAbstractTypeOfModel<T>) {}

  protected getFinalData(raw: boolean, data: null | T | T[]) {
    if (!data) return null;

    if (raw) {
      return !Array.isArray(data)
        ? (data.toJSON() as T)
        : (data.map((item) => item.toJSON()) as T[]);
    }

    return data;
  }

  public async findOne(options: FindOptions<T>): Promise<T | null> {
    const { raw = true, ...otherOptions } = options;

    const data = await this.Model.findOne(otherOptions);

    return this.getFinalData(raw, data) as T | null;
  }

  public create(values: Partial<T>, transaction?: Transaction): Promise<T> {
    return this.Model.create(
      values as MakeNullishOptional<T['_creationAttributes']>,
      { transaction },
    );
  }
}
