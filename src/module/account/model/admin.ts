/**
 * @author wizard
 * @date 2020/12/27 23:09
 */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Database, UserType } from 'edu-graph-constant';

@Schema({ collection: Database.Admin })
export class Admin extends Document {
  @Prop()
  name!: string;

  @Prop()
  phone?: string;

  @Prop()
  password!: string;

  @Prop()
  email?: string;

  @Prop()
  isForbidden?: boolean;
}

export const adminSchema = SchemaFactory.createForClass(Admin);
