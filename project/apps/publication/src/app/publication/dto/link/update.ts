import { ApiProperty } from '@nestjs/swagger';
import { Properties } from '../properties';

export class UpdateLinkPublicationDto {
  @ApiProperty(Properties.Url)
  url: string;
  @ApiProperty(Properties.Description)
  description?: string;
}
