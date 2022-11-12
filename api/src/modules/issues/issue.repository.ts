import { Injectable } from '@nestjs/common';
import {
  Op,
  Sequelize,
  FindOptions,
  Transaction,
  WhereOptions,
} from 'sequelize';
import {
  FindAndPaginateResult,
  PaginationOptions,
} from 'src/common/interface/pagination';

import { BaseRepository } from '../sequelize/sequelize.class';
import { Repository } from '../sequelize/sequelize.interface';

import { IIssue, IssueRangeQuery } from './issue.interface';
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

  async findAndPaginate(
    options: PaginationOptions = {},
    params: Partial<IIssue> & IssueRangeQuery = {},
  ): Promise<FindAndPaginateResult<Issue>> {
    const { created_at_start_date, created_at_end_date, ...initialWhere } =
      params;

    const where: WhereOptions<Issue> = { ...initialWhere };

    if (created_at_start_date && created_at_end_date) {
      where[Op.and] = [
        { created_at: { [Op.gte]: created_at_start_date } },
        { created_at: { [Op.lte]: created_at_end_date } },
      ];
    } else if (created_at_start_date) {
      where[Op.and] = [{ created_at: { [Op.gte]: created_at_start_date } }];
    } else if (created_at_end_date) {
      where[Op.and] = [{ created_at: { [Op.lte]: created_at_end_date } }];
    }

    return this.baseRepository.paginate({ ...options, where });
  }

  async getStatistics(params: IssueRangeQuery = {}) {
    const { created_at_start_date, created_at_end_date } = params;

    const where: WhereOptions<Issue> = {};

    if (created_at_start_date && created_at_end_date) {
      where[Op.and] = [
        { created_at: { [Op.gte]: created_at_start_date } },
        { created_at: { [Op.lte]: created_at_end_date } },
      ];
    } else if (created_at_start_date) {
      where[Op.and] = [{ created_at: { [Op.gte]: created_at_start_date } }];
    } else if (created_at_end_date) {
      where[Op.and] = [{ created_at: { [Op.lte]: created_at_end_date } }];
    }

    return this.baseRepository.Model.findAll({
      attributes: [
        [Sequelize.fn('DATE', Sequelize.col('created_at')), 'date'],
        [Sequelize.fn('COUNT', 1), 'total_count'],
        [Sequelize.fn('SUM', Sequelize.col('score')), 'total_score'],
      ],
      group: [Sequelize.fn('DATE', Sequelize.col('created_at')), 'date'],
      where,
    });
  }
}

export default IssueRepository;
