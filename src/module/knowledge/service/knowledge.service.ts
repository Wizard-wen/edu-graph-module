/**
 * @author wizard.song
 * @date 2020/09/23 23:52
 */

import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import type { KnowledgeBaseTypeResponseType } from 'edu-graph-constant';
import { Database } from 'edu-graph-constant';
import { Knowledge } from '../model/knowledge';
import { BaseService } from '../../../base/base.service';

@Injectable()
export class KnowledgeService extends BaseService<Knowledge> {
  constructor(
    @InjectModel(Database.Knowledge)
    protected readonly model: Model<Knowledge>
  ) {
    super(model);
  }

  async getKnowledgeMap(): Promise<{ [key: string]: KnowledgeBaseTypeResponseType }> {
    const knowledgeList = await this.model.find();
    return knowledgeList.reduce(
      (previousValue: { [key: string]: KnowledgeBaseTypeResponseType }, currentValue: Knowledge) => ({
        ...previousValue,
        [currentValue._id.toString()]: {
          id: currentValue._id.toString(),
          name: currentValue.name,
          knowledgeBaseTypeId: currentValue.knowledgeBaseTypeId
        }
      }),
      {}
    );
  }
}
