import { ApiProperty } from '@nestjs/swagger';
import { Properties } from '../properties';

export class UpdateQuotePublicationDto {
  @ApiProperty(Properties.Text)
  text?: string;
  @ApiProperty(Properties.Author)
  author?: string;
}
