import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  MaxLength,
  MinLength,
  IsOptional,
  IsNumber,
  IsPositive,
  IsInt,
  IsDateString,
} from 'class-validator';
import { Transform } from 'class-transformer';

import { transformToInt } from 'src/common/utils/transformToInt';
import { PaginationMeta } from 'src/common/class.ts/pagination';

import { IIssue, IIssueStatistic } from './issue.interface';
import Issue from './issue.model';
import { IssueStatistic } from './issue.class';

export class CreateIssuePayload {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(64)
  readonly name: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  readonly description?: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly score: number;
}

export class CreateIssueRes
  implements Pick<IIssue, 'name' | 'description' | 'score' | 'created_at'>
{
  @ApiProperty({ description: 'Issue name' })
  readonly name: string;

  @ApiProperty({ description: 'Issue description' })
  readonly description: string;

  @ApiProperty({ description: 'Issue score' })
  readonly score: number;

  @ApiProperty({ description: 'Issue created at' })
  readonly created_at: Date;
}

export class GetIssuesQuery {
  @ApiProperty({
    default: 10,
    example: 10,
  })
  @Transform(transformToInt)
  @IsInt()
  @IsOptional()
  readonly page_size?: number = 10;

  @ApiProperty({
    default: 1,
    example: 1,
  })
  @Transform(transformToInt)
  @IsInt()
  @IsOptional()
  readonly page?: number = 1;

  @ApiProperty({
    default: 'created_at',
    enum: ['id', 'created_at', 'updated_at', 'name', 'score'],
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly order_by?: string = 'created_at';

  @ApiProperty({
    default: 'ASC',
    enum: ['ASC', 'DESC'],
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly sort_by?: string = 'ASC';

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  readonly created_at_start_date?: Date;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  readonly created_at_end_date?: Date;
}

export class GetIssuesRes {
  @ApiProperty({ type: [Issue] })
  readonly data: Issue[];

  @ApiProperty({ type: PaginationMeta })
  readonly meta: PaginationMeta;
}

export class GetIssuesStatisticsQuery {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  readonly created_at_start_date?: Date;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  readonly created_at_end_date?: Date;
}
export class GetIssuesStatisticsRes {
  @ApiProperty({ type: [IssueStatistic] })
  readonly data?: IssueStatistic[];
}
