/**
 * @author wizard
 * @date 2020/09/14 23:09
 */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Database } from 'edu-graph-constant';

@Schema({ collection: Database.KnowledgeLevelBaseType })
export class KnowledgeLevelBaseType extends Document {
  @Prop()
  name!: string;
}

export const knowledgeLevelBaseTypeSchema = SchemaFactory.createForClass(KnowledgeLevelBaseType);
