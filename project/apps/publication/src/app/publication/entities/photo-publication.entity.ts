import { PhotoPublication } from '@project/shared/app/types';
import { Entity } from '@project/shared/core';
import { PublicationType } from 'shared/app/types/src/lib/publication/publication-type.enum';
import { CreatePhotoPublicationDto } from '../dto/photo/create';

export class PhotoPublicationEntity
  implements PhotoPublication, Entity<string>
{

  constructor(photo: CreatePhotoPublicationDto) {
    this.populate(photo);
  }

  authorId: string;
  title: string;
  tags: string[];
  id?: string;
  type: PublicationType.Photo;
  likesIds: string[];
  commentsIds: string[];

  url: string;
  description?: string;

  public toPOJO() {
    return {
      id: this.id,
      title: this.title,
      authorId: this.authorId,
      tags: this.tags,
      type: this.type,

      likesIds: this.likesIds,
      commentIds: this.commentsIds,

      url: this.url,
      description: this.description,
    };
  }

  public populate(data: CreatePhotoPublicationDto) {
    this.title = data.title;
    this.authorId = data.authorId;
    this.tags = data.tags;
    this.type = PublicationType.Photo;

    this.url = data.url;
    this.description = data.description;
  }
}
