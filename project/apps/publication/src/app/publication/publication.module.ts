import { Module } from '@nestjs/common';
import { PublicationController } from './publication.controller';

@Module({
  controllers: [PublicationController],
})
export class PublicationModule {}
