/**
 * @author wizard
 * @date 2020/12/30 22:27
 */

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Database } from 'edu-graph-constant';
import { RepositoryService } from './service/repository.service';
import { RepositoryKnowledgeService } from './service/repository.knowledge.service';
import { repositorySchema } from './model/repository';
import { repositoryKnowledgeSchema } from './model/repository.knowledge';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Database.Repository,
        schema: repositorySchema,
      },
      {
        name: Database.RepositoryKnowledge,
        schema: repositoryKnowledgeSchema,
      },
    ]),
  ],
  providers: [
    { provide: 'RepositoryService', useClass: RepositoryService },
    { provide: 'RepositoryKnowledgeService', useClass: RepositoryKnowledgeService },
  ],
  exports: [
    { provide: 'RepositoryService', useClass: RepositoryService },
    { provide: 'RepositoryKnowledgeService', useClass: RepositoryKnowledgeService },
  ],
})
export class RepositoryModule {
}
