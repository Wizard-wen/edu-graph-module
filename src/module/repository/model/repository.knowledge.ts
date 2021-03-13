/**
 * @author songxiwen
 * @date 2020/09/28 20:56
 * @description 知识点是可以跨越repository的。
 * 知识点在创建时一定属于某一个repository，但是知识点一旦被设定为public，就可以被其他仓库引用
 * repository.knowledge表记录的就是知识点在各种仓库中的引用。
 */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Database } from 'edu-graph-constant';

@Schema({ collection: Database.RepositoryKnowledge })
export class RepositoryKnowledge extends Document {
  // 添加者
  @Prop()
  userId!: string;

  //
  @Prop()
  repositoryId!: string;

  //
  @Prop()
  knowledgeId!: string;
}

export const repositoryKnowledgeSchema = SchemaFactory.createForClass(RepositoryKnowledge);
