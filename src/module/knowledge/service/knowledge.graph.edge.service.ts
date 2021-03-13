/**
 * @author wizard.song
 * @date 2020/09/23 23:52
 */

import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Database } from 'edu-graph-constant';
import { KnowledgeGraphEdge } from '../model/knowledge.graph.edge';
import { BaseService } from '../../../base/base.service';

@Injectable()
export class KnowledgeGraphEdgeService extends BaseService<KnowledgeGraphEdge> {
  constructor(
    @InjectModel(Database.KnowledgeGraphEdge)
    protected readonly model: Model<KnowledgeGraphEdge>
  ) {
    super(model);
  }
}
