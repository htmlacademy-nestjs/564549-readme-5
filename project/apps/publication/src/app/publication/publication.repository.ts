import { Injectable } from '@nestjs/common';
import { BaseMemoryRepository } from '@project/shared/core';
import { Publication } from '@project/shared/app/types';

@Injectable()
export class PublicationsRepository extends BaseMemoryRepository<Publication> {}
