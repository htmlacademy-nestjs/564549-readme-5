import { ApiProperty } from '@nestjs/swagger';
import { Properties } from '../properties';
import { CreateAbstractPublicationDto } from '../abstract';

export class UpdatePhotoPublicationDto {
  @ApiProperty(Properties.Url)
  url?: string;
  @ApiProperty(Properties.Description)
  description?: string;
}
