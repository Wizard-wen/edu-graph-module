/**
 * @author wizard
 * @date 2020/09/14 23:09
 * @description 知识点类型的分类 公理、名词、技巧
 */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Database } from 'edu-graph-constant';

@Schema({ collection: Database.KnowledgeBaseType })
export class KnowledgeBaseType extends Document {
  @Prop()
  name!: string;

  @Prop()
  key!: string;
}

export const knowledgeBaseTypeSchema = SchemaFactory.createForClass(KnowledgeBaseType);
