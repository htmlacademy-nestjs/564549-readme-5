import {Publication, VideoPublication} from '@project/shared/app/types'
import { Entity } from '@project/shared/core';
import { PublicationType } from 'shared/app/types/src/lib/publication/publication-type.enum';

export class VideoPublicationEntity implements VideoPublication,  Entity<string> {
  authorId: string;
  title: string;
  tags?: string[];
  likesCount: number;
  id?: string;
  type: PublicationType.Video;
  url: string;

  public toPOJO() {
    return {
      id: this.id,
      title: this.title,
      authorId: this.authorId,
      tags: this.tags,
      likesCount: this.likesCount,
      type: this.type,
      url: this.url,
    }
  }

  public populate(data: VideoPublication) {
    this.id = data?.id;
    this.title = data.title;
    this.authorId = data.authorId;
    this.tags = data.tags;
    this.likesCount = data.likesCount;
    this.type = data.type;
    this.url = data.url;
  }
}
