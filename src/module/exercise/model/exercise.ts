/**
 * @author songxiwen
 * @date 2020/09/28 20:56
 */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Database } from 'edu-graph-constant';

@Schema({ collection: Database.Exercise })
export class Exercise extends Document {
  @Prop()
  name!: string;

  @Prop()
  content?: string;

  @Prop()
  answer?: string;

  @Prop()
  answerInstep?: string[];

  @Prop()
  knowledgeList?: string[];
}

export const exerciseSchema = SchemaFactory.createForClass(Exercise);
