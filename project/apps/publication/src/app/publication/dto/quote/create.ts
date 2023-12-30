import { ApiProperty } from '@nestjs/swagger';
import { Properties } from '../properties';
import { CreateAbstractPublicationDto } from '../abstract';
import { PublicationType } from '@project/shared/app/types';

export class CreateQuotePublicationDto extends CreateAbstractPublicationDto {
  @ApiProperty(Properties.Text)
  text: string;
  @ApiProperty(Properties.Author)
  author: string;
}
