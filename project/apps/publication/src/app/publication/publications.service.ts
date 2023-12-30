import { Injectable } from '@nestjs/common';
import { CreatePhotoPublicationDto } from './dto/photo/create';
import { CreateQuotePublicationDto } from './dto/quote/create';
import { CreateTextPublicationDto } from './dto/text/create';
import { CreateVideoPublicationDto } from './dto/video/create';
import { PublicationsRepository } from './publication.repository';
import { CreateLinkPublicationDto } from './dto/link/create';
import { LinkPublicationEntity } from './entities/link-publication.entyty';
import { PhotoPublicationEntity } from './entities/photo-publication.entity';
import { QuotePublicationEntity } from './entities/quote-publication.entyty';
import { TextPublicationEntity } from './entities/text-publication.entity';
import { VideoPublicationEntity } from './entities/video-publication.entity';
import { Publication, PublicationType } from '@project/shared/app/types';
import { UpdateLinkPublicationDto } from './dto/link/update';
import { UpdatePhotoPublicationDto } from './dto/photo/update';
import { UpdateQuotePublicationDto } from './dto/quote/update';
import { UpdateTextPublicationDto } from './dto/text/update';
import { UpdateVideoPublicationDto } from './dto/video/update';

@Injectable()
export class PublicationsService {
  constructor(
    private readonly publicationsRepository: PublicationsRepository
  ) {}

  public async createLinkPublication(publication: CreateLinkPublicationDto) {
    const current = new LinkPublicationEntity(publication);

    const createdPublication = await this.publicationsRepository.save(current);
    return createdPublication;
  }

  public async createPhotoPublication(publication: CreatePhotoPublicationDto) {
    const current = new PhotoPublicationEntity(publication);

    const createdPublication = await this.publicationsRepository.save(current);
    return createdPublication;
  }

  public async createQuotePublication(publication: CreateQuotePublicationDto) {
    const current = new QuotePublicationEntity(publication);

    const createdPublication = await this.publicationsRepository.save(current);
    return createdPublication;
  }

  public async createTextPublication(publication: CreateTextPublicationDto) {
    const current = new TextPublicationEntity(publication);

    const createdPublication = await this.publicationsRepository.save(current);
    return createdPublication;
  }

  public async createVideoPublication(publication: CreateVideoPublicationDto) {
    const current = new VideoPublicationEntity(publication);

    const createdPublication = await this.publicationsRepository.save(current);
    return createdPublication;
  }

  public async getPublication(publicationId: string) {
    return await this.publicationsRepository.findById(publicationId);
  }

  public async updateLinkPublication(
    publicationId: string,
    publication: UpdateLinkPublicationDto
  ) {
    const oldPublication = await this.getPublication(publicationId);

    if (oldPublication.type !== PublicationType.Link) {
      throw new Error('Publication is not link');
    }

    return await this.publicationsRepository.update(publicationId, {
      ...oldPublication,
      ...publication,
    });
  }

  public async updatePhotoPublication(
    publicationId: string,
    publication: UpdatePhotoPublicationDto
  ) {
    const oldPublication = await this.getPublication(publicationId);

    if (oldPublication.type !== PublicationType.Photo) {
      throw new Error('Publication is not photo');
    }

    return await this.publicationsRepository.update(publicationId, {
      ...oldPublication,
      ...publication,
    });
  }

  public async updateQuotePublication(
    publicationId: string,
    publication: UpdateQuotePublicationDto
  ) {
    const oldPublication = await this.getPublication(publicationId);

    if (oldPublication.type !== PublicationType.Quote) {
      throw new Error('Publication is not quote');
    }

    return await this.publicationsRepository.update(publicationId, {
      ...oldPublication,
      ...publication,
    });
  }

  public async updateTextPublication(
    publicationId: string,
    publication: UpdateTextPublicationDto
  ) {
    const oldPublication = await this.getPublication(publicationId);

    if (oldPublication.type !== PublicationType.Text) {
      throw new Error('Publication is not text');
    }

    return await this.publicationsRepository.update(publicationId, {
      ...oldPublication,
      ...publication,
    });
  }

  public async updateVideoPublication(
    publicationId: string,
    publication: UpdateVideoPublicationDto
  ) {
    const oldPublication = await this.getPublication(publicationId);

    if (oldPublication.type !== PublicationType.Video) {
      throw new Error('Publication is not video');
    }

    return await this.publicationsRepository.update(publicationId, {
      ...oldPublication,
      ...publication,
    });
  }

  public async removePublication(publicationId: string) {
    return await this.publicationsRepository.deleteById(publicationId);
  }
}
