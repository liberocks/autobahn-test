import { Injectable } from '@nestjs/common';
import { FindOptions, Transaction } from 'sequelize';

import { BaseRepository } from '../sequelize/sequelize.class';
import { Repository } from '../sequelize/sequelize.interface';

import { IIssue } from './issue.interface';
import Issue from './issue.model';

@Injectable()
export class IssueRepository implements Repository<IIssue> {
  protected readonly baseRepository: BaseRepository<Issue>;
  constructor() {
    this.baseRepository = new BaseRepository(Issue);
  }

  create(values: Partial<IIssue>, transaction?: Transaction): Promise<IIssue> {
    return this.baseRepository.create(values, transaction);
  }

  findOne(params: FindOptions<IIssue>): Promise<IIssue | null> {
    return this.baseRepository.findOne(params);
  }
}

export default IssueRepository;
