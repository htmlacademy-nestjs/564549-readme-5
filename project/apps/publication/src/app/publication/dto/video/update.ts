import { ApiProperty } from '@nestjs/swagger';
import { Properties } from '../properties';

export class UpdateVideoPublicationDto {
  @ApiProperty(Properties.Url)
  url: string;
}
