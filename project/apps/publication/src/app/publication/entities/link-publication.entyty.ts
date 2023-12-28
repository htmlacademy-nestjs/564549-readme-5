import { LinkPublication } from '@project/shared/app/types';
import { Entity } from '@project/shared/core';
import { PublicationType } from 'shared/app/types/src/lib/publication/publication-type.enum';
import { CreateLinkPublicationDto } from '../dto/link/create';

export class LinkPublicationEntity implements LinkPublication, Entity<string> {
  constructor(link: CreateLinkPublicationDto) {
    this.populate(link);
  }

  authorId: string;
  title: string;
  tags: string[];
  id?: string;
  type: PublicationType.Link;
  likesIds: string[];
  commentsIds: string[];

  url: string;
  description?: string;

  public toPOJO() {
    return {
      id: this.id,
      title: this.title,

      tags: this.tags,
      type: this.type,
      likesIds: this.likesIds,
      commentIds: this.commentsIds,

      url: this.url,
      description: this.description,
    };
  }

  public populate(data: CreateLinkPublicationDto) {
    this.title = data.title;
    this.authorId = data.authorId;
    this.tags = data.tags;
    this.type = PublicationType.Link;

    this.url = data.url;
    this.description = data.description;
  }
}
