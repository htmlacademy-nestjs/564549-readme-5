import { ApiProperty } from '@nestjs/swagger';
import { Properties } from '../properties';
import { CreateAbstractPublicationDto } from '../abstract';
import { PublicationType } from '@project/shared/app/types';
import { LinkPublicationEntity } from '../../entities/link-publication.entyty';

export class CreateLinkPublicationDto extends CreateAbstractPublicationDto {
  @ApiProperty(Properties.Url)
  url: string;
  @ApiProperty(Properties.Description)
  description?: string;
}
