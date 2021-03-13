/**
 * @author wizard
 * @date 2020/09/14 23:09
 */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  Database
} from 'edu-graph-constant';

@Schema({ collection: Database.Point })
export class Point extends Document {
  @Prop()
  userId!: string;

  @Prop()
  updatedAt!: Date;

  @Prop()
  total!: number;
}

export const pointSchema = SchemaFactory.createForClass(Point);
