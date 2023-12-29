import { CreateLinkPublicationDto } from './link/create';
import { CreatePhotoPublicationDto } from './photo/create';
import { CreateQuotePublicationDto } from './quote/create';
import { CreateTextPublicationDto } from './text/create';
import { CreateVideoPublicationDto } from './video/create';

export type PublicationDto =
  | CreateLinkPublicationDto
  | CreatePhotoPublicationDto
  | CreateQuotePublicationDto
  | CreateTextPublicationDto
  | CreateVideoPublicationDto;
