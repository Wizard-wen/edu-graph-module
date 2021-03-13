/**
 * @author wizard
 * @date 2020/12/27 23:09
 */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Database, UserType } from 'edu-graph-constant';

@Schema({ collection: Database.User })
export class User extends Document {
  // 个人还是组织
  @Prop()
  type!: UserType;

  // 组织id
  @Prop()
  organizationId?: string;

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

export const userSchema = SchemaFactory.createForClass(User);
