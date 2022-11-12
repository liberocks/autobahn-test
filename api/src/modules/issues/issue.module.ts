import { Global, Module } from '@nestjs/common';

import IssueRepository from './issue.repository';
import { IssueService } from './issue.service';

@Global()
@Module({
  providers: [IssueRepository, IssueService],
  exports: [],
})
export class IssueModule {}
