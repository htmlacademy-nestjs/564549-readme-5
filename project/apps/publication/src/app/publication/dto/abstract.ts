import { ApiProperty } from "@nestjs/swagger";
import { Properties } from "./properties";
import { Publication, PublicationType } from "@project/shared/app/types";

export class CreateAbstractPublicationDto {

  @ApiProperty(Properties.Description)
  description?: string;
  @ApiProperty(Properties.AuthorID)
  authorId: string;
  @ApiProperty(Properties.Title)
  title: string;
  @ApiProperty(Properties.Tags)
  tags: string[];
}
