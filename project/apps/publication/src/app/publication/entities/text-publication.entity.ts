import { TextPublication } from '@project/shared/app/types';
import { Entity } from '@project/shared/core';
import { PublicationType } from 'shared/app/types/src/lib/publication/publication-type.enum';
import { CreateTextPublicationDto } from '../dto/text/create';

export class TextPublicationEntity implements TextPublication, Entity<string> {
  constructor(text: CreateTextPublicationDto) {
    this.populate(text);
  }

  authorId: string;
  title: string;
  tags: string[];
  id?: string;
  type: PublicationType.Text;

  likesIds: string[];
  commentsIds: string[];

  text: string;
  announcement: string;

  public toPOJO() {
    return {
      id: this.id,
      title: this.title,
      authorId: this.authorId,
      tags: this.tags,
      type: this.type,

      likesIds: this.likesIds,
      commentIds: this.commentsIds,

      text: this.text,
      announcement: this.announcement,
    };
  }

  public populate(data: CreateTextPublicationDto) {
    this.title = data.title;
    this.authorId = data.authorId;
    this.tags = data.tags;
    this.type = PublicationType.Text



    this.text = data.text;
    this.announcement = data.announcement;
  }
}
