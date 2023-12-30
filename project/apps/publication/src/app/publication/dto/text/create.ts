import { ApiProperty } from '@nestjs/swagger';
import { Properties } from '../properties';
import { CreateAbstractPublicationDto } from '../abstract';
import { PublicationType } from '@project/shared/app/types';

export class CreateTextPublicationDto extends CreateAbstractPublicationDto {
  @ApiProperty(Properties.Text)
  text: string;
  @ApiProperty(Properties.Author)
  author: string;
  @ApiProperty(Properties.Announcement)
  announcement: string;
}
