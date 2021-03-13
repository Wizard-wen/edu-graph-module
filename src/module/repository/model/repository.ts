/**
 * @author songxiwen
 * @date 2020/09/28 20:56
 */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Database, RepositoryType } from 'edu-graph-constant';

@Schema({ collection: Database.Repository })
export class Repository extends Document {
  @Prop()
  name!: string;

  // 仓库类型分为公开和私有
  @Prop()
  type!: RepositoryType;

  // 所有者
  @Prop()
  userId!: string;

  // 协作者
  @Prop()
  collaboratorIds?: string[];
}

export const repositorySchema = SchemaFactory.createForClass(Repository);
