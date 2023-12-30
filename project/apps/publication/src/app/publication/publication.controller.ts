import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  HttpStatus,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { PublicationsService } from './publications.service';
import { CreateLinkPublicationDto } from './dto/link/create';
import { CreatePhotoPublicationDto } from './dto/photo/create';
import { CreateQuotePublicationDto } from './dto/quote/create';
import { CreateTextPublicationDto } from './dto/text/create';
import { CreateVideoPublicationDto } from './dto/video/create';
import { UpdateLinkPublicationDto } from './dto/link/update';
import { UpdatePhotoPublicationDto } from './dto/photo/update';
import { UpdateQuotePublicationDto } from './dto/quote/update';
import { UpdateTextPublicationDto } from './dto/text/update';
import { UpdateVideoPublicationDto } from './dto/video/update';

@ApiTags('publication')
@Controller('publication')
export class PublicationController {
  constructor(private readonly publicationsService: PublicationsService) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The link publication has been successfully created.',
  })
  @Post('link')
  public async createLinkPublication(
    @Body() publication: CreateLinkPublicationDto
  ) {
    return await this.publicationsService.createLinkPublication(publication);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The link publication has been successfully updated.',
  })
  @Patch('link/:id')
  public async updateLinkPublication(
    @Param('id') id: string,
    @Body() publication: UpdateLinkPublicationDto
  ) {
    return await this.publicationsService.updateLinkPublication(
      id,
      publication
    );
  }

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The photo publication has been successfully created.',
  })
  @Post('photo')
  public async createPhotoPublication(
    @Body() publication: CreatePhotoPublicationDto
  ) {
    return await this.publicationsService.createPhotoPublication(publication);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The photo publication has been successfully updated.',
  })
  @Patch('photo/:id')
  public async updatePhotoPublication(
    @Param('id') id: string,
    @Body() publication: UpdatePhotoPublicationDto
  ) {
    return await this.publicationsService.updatePhotoPublication(
      id,
      publication
    );
  }

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The quote publication has been successfully created.',
  })
  @Post('quote')
  public async createQuotePublication(
    @Body() publication: CreateQuotePublicationDto
  ) {
    return await this.publicationsService.createQuotePublication(publication);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The quote publication has been successfully updated.',
  })
  @Patch('quote/:id')
  public async updateQuotePublication(
    @Param('id') id: string,
    @Body() publication: UpdateQuotePublicationDto
  ) {
    return await this.publicationsService.updateQuotePublication(
      id,
      publication
    );
  }

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The text publication has been successfully created.',
  })
  @Post('text')
  public async createTextPublication(
    @Body() publication: CreateTextPublicationDto
  ) {
    return await this.publicationsService.createTextPublication(publication);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The text publication has been successfully updated.',
  })
  @Patch('text/:id')
  public async updateTextPublication(
    @Param('id') id: string,
    @Body() publication: UpdateTextPublicationDto
  ) {
    return await this.publicationsService.updateTextPublication(
      id,
      publication
    );
  }

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The video publication has been successfully created.',
  })
  @Post('video')
  public async createVideoPublication(
    @Body() publication: CreateVideoPublicationDto
  ) {
    return await this.publicationsService.createVideoPublication(publication);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The video publication has been successfully updated.',
  })
  @Patch('video/:id')
  public async updateVideoPublication(
    @Param('id') id: string,
    @Body() publication: UpdateVideoPublicationDto
  ) {
    return await this.publicationsService.updateVideoPublication(
      id,
      publication
    );
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Publication found',
  })
  @Get(':id')
  public async getPublication(@Param('id') id: string) {
    return await this.publicationsService.getPublication(id);
  }

  @Delete(':id')
  public async deletePublication(@Param('id') id: string) {
    return await this.publicationsService.removePublication(id);
  }
}
