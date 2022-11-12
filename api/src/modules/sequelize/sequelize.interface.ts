import { Model } from 'sequelize-typescript';
import { FindOptions } from 'sequelize';

export interface BaseModel {
  id: number;
  created_at: Date;
  updated_at?: Date | null;
  deleted_at?: Date | null;
}

export interface PaginationOptions {
  order_by?: string;
  page_size?: number;
  page?: number;
  sort_by?: string;
}

export interface Repository<T> {
  create(values: Partial<T>): Promise<T>;
  findOne(params: FindOptions<T>): Promise<T | null>;
}

export type NonAbstract<T> = { [P in keyof T]: T[P] };
export type Constructor<T> = new () => T;
export type NonAbstractTypeOfModel<T> = Constructor<T> &
  NonAbstract<typeof Model>;
