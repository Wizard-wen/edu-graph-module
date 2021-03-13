/**
 *
 */

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Database } from 'edu-graph-constant';
import { KnowledgeService } from './service/knowledge.service';
import { KnowledgeBaseTypeService } from './service/knowledge.base.type.service';
import { KnowledgeGraphEdgeService } from './service/knowledge.graph.edge.service';
import { knowledgeSchema } from './model/knowledge';
import { knowledgeBaseTypeSchema } from './model/knowledge.base.type';
import { knowledgeGraphEdgeSchema } from './model/knowledge.graph.edge';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Database.Knowledge,
        schema: knowledgeSchema,
      },
      {
        name: Database.KnowledgeBaseType,
        schema: knowledgeBaseTypeSchema,
      },
      {
        name: Database.KnowledgeGraphEdge,
        schema: knowledgeGraphEdgeSchema,
      },
    ]),
  ],
  providers: [
    { provide: 'KnowledgeService', useClass: KnowledgeService },
    { provide: 'KnowledgeBaseTypeService', useClass: KnowledgeBaseTypeService },
    {
      provide: 'KnowledgeGraphEdgeService',
      useClass: KnowledgeGraphEdgeService,
    },
  ],
  exports: [
    { provide: 'KnowledgeService', useClass: KnowledgeService },
    { provide: 'KnowledgeBaseTypeService', useClass: KnowledgeBaseTypeService },
    {
      provide: 'KnowledgeGraphEdgeService',
      useClass: KnowledgeGraphEdgeService,
    },
  ],
})
export class KnowledgeModule {
}
