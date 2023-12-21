import { AbstractPublication } from "./abstract-publication.interface";
import { PublicationType } from "./publication-type.enum";

export interface VideoPublication extends AbstractPublication {
  type: PublicationType.Video;
  url: string;
}

export interface TextPublication extends AbstractPublication {
  type: PublicationType.Text;
  text: string;
  announcement: string;
}

export interface QuotePublication extends AbstractPublication {
  type: PublicationType.Quote;
  text: string;
  author: string;
}

export interface PhotoPublication extends AbstractPublication {
  type: PublicationType.Photo;
  url: string;
  description?: string;
}

export type Publication = VideoPublication | TextPublication | QuotePublication | PhotoPublication;
