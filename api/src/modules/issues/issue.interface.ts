import { BaseModel } from '../sequelize/sequelize.interface';

export interface IssueProperty {
  name: string;
  description?: string;
  score: number;
}

export interface IIssue extends BaseModel, IssueProperty {}
