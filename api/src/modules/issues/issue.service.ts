import { Injectable, Logger } from '@nestjs/common';
import { Transaction, FindOptions } from 'sequelize';

import { IIssue } from './issue.interface';
import IssueRepository from './issue.repository';

@Injectable()
export class IssueService {
  private readonly logger = new Logger(IssueService.name);

  constructor(private readonly issueRepository: IssueRepository) {}
}
