import { QuotePublication } from '@project/shared/app/types';
import { Entity } from '@project/shared/core';
import { PublicationType } from 'shared/app/types/src/lib/publication/publication-type.enum';
import { CreateQuotePublicationDto } from '../dto/quote/create';

export class QuotePublicationEntity
  implements QuotePublication, Entity<string>
{
  constructor(quote: CreateQuotePublicationDto) {
    this.populate(quote);
  }

  authorId: string;
  title: string;
  tags: string[];
  id?: string;
  type: PublicationType.Quote;

  likesIds: string[];
  commentsIds: string[];

  text: string;
  author: string;

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
      author: this.author,
    };
  }

  public populate(data: CreateQuotePublicationDto) {
    this.title = data.title;
    this.authorId = data.authorId;
    this.tags = data.tags;

    this.text = data.text;
    this.author = data.author;
    this.type = PublicationType.Quote;
  }
}
