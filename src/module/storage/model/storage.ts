/**
 * @author songxiwen
 * @date 2021/02/20 20:56
 */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Database, StorageType } from 'edu-graph-constant';

@Schema({ collection: Database.Storage })
export class Storage extends Document {
  @Prop()
  type!: StorageType;

  @Prop()
  name!: string;

  @Prop()
  userId!: string;

  @Prop()
  platform!: string;

  @Prop()
  key!: string;
}

export const storageSchema = SchemaFactory.createForClass(Storage);
