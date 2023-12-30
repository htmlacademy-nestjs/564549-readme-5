import { Module } from '@nestjs/common';
import { PublicationController } from './publication.controller';
import { PublicationsService } from './publications.service';
import { PublicationsRepository } from './publication.repository';

@Module({
  controllers: [PublicationController],
  imports: [],
  providers: [PublicationsService, PublicationsRepository],
})
export class PublicationModule {}
