/**
 * @author wizard
 * @date 2020/09/14 23:09
 */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  Database,
  PointDetailSymbol,
  PointSourceType,
} from 'edu-graph-constant';

@Schema({ collection: Database.PointDetail })
export class PointDetail extends Document {
  @Prop()
  userId!: string;

  @Prop()
  point!: number;

  @Prop()
  createdAt!: Date;

  @Prop()
  sourceType!: PointSourceType;

  @Prop()
  symbol!: PointDetailSymbol;
}

export const pointDetailSchema = SchemaFactory.createForClass(PointDetail);
