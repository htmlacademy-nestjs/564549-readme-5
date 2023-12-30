import { VideoPublication } from '@project/shared/app/types';
import { Entity } from '@project/shared/core';
import { PublicationType } from 'shared/app/types/src/lib/publication/publication-type.enum';
import { CreateVideoPublicationDto } from '../dto/video/create';

export class VideoPublicationEntity
  implements VideoPublication, Entity<string>
{
  constructor(video: CreateVideoPublicationDto) {
    this.populate(video);
  }

  authorId: string;
  title: string;
  tags: string[];
  id?: string;
  type: PublicationType.Video;

  likesIds: string[];
  commentsIds: string[];

  url: string;

  public toPOJO() {
    return {
      id: this.id,
      title: this.title,
      authorId: this.authorId,
      tags: this.tags,
      type: this.type,

      url: this.url,

      likesIds: this.likesIds,
      commentIds: this.commentsIds,
    };
  }

  public populate(data: CreateVideoPublicationDto) {
    this.title = data.title;
    this.authorId = data.authorId;
    this.tags = data.tags;

    this.type = PublicationType.Video;

    this.url = data.url;
  }
}
