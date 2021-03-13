/**
 * @author wizard.song
 * @date 2020/09/23 23:52
 */

import { Injectable } from '@nestjs/common';
import { Model} from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { RepositoryKnowledge } from '../model/repository.knowledge';
import { Database } from 'edu-graph-constant';
import { BaseService } from '../../../base/base.service';

@Injectable()
export class RepositoryKnowledgeService extends BaseService<RepositoryKnowledge> {
  constructor(
    @InjectModel(Database.RepositoryKnowledge)
    protected readonly model: Model<RepositoryKnowledge>,
  ) {
    super(model);
  }
}
