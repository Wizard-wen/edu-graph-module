/**
 * @author wizard.song
 * @date 2020/09/23 23:52
 */

import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import type { KnowledgeBaseTypeResponseType } from 'edu-graph-constant';
import { KnowledgeBaseType } from '../model/knowledge.base.type';
import { Database } from 'edu-graph-constant';
import { BaseService } from '../../../base/base.service';

@Injectable()
export class KnowledgeBaseTypeService extends BaseService<KnowledgeBaseType> {
  constructor(
    @InjectModel(Database.KnowledgeBaseType)
    protected readonly model: Model<KnowledgeBaseType>
  ) {
    super(model);
  }

  async getKnowledgeBaseTypeMap(): Promise<{ [key: string]: KnowledgeBaseTypeResponseType }> {
    const knowledgeBaseTypeList = await this.model.find();
    return knowledgeBaseTypeList.reduce(
      (previousValue: { [key: string]: KnowledgeBaseTypeResponseType }, currentValue: KnowledgeBaseType) => ({
        ...previousValue,
        [currentValue._id.toString()]: {
          id: currentValue._id.toString(),
          name: currentValue.name,
          key: currentValue.key
        }
      }),
      {}
    );
  }
}
