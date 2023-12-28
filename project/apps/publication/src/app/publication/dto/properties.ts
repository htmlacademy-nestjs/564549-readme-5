import { ApiPropertyOptions } from '@nestjs/swagger';
import { PublicationType } from 'shared/app/types/src/lib/publication/publication-type.enum';

export const Properties = {
 Text: {
  description: 'some text',
  example: 'some text',
 },

 AuthorID: {
  description: 'Author ID',
  example: 1234,
 },

 Title: {
  description: 'Some Title',
  example: 'Some Title',
 },

 Tags: {
  description: 'Some Tags',
  example: ['some', 'tags'],
 },

 Type: {
  description: 'Publication Type',
  example: PublicationType.Quote,
 },

 Url: {
  description: 'Some Url',
  example: 'www.someurl.com',
 },

 Author: {
  description: 'Some Author',
  example: 'Some Author',
 },

 Description: {
  description: 'Some Description',
  example: 'Some Description',
 },

 Announcement: {
  description: 'Some Announcement',
  example: 'Some Announcement',
 }
}satisfies Record<string, ApiPropertyOptions>;
