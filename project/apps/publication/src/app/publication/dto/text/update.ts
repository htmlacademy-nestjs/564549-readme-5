import { ApiProperty } from '@nestjs/swagger';
import { Properties } from '../properties';

export class UpdateTextPublicationDto {
  @ApiProperty(Properties.Text)
  text?: string;
  @ApiProperty(Properties.Author)
  author?: string;
  @ApiProperty(Properties.Announcement)
  announcement?: string;
}
