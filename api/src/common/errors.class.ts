import { ApiProperty } from '@nestjs/swagger';

export class ErrorResponse {
  @ApiProperty()
  readonly status: number;

  @ApiProperty()
  readonly message: string;

  @ApiProperty({
    required: false,
  })
  readonly error: string;

  @ApiProperty({
    required: false,
  })
  readonly data: object;
}
