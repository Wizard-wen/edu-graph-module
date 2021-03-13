/**
 * @author wizard
 * @date 2020/12/27 23:09
 */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Database } from 'edu-graph-constant';

@Schema({ collection: Database.AdminToken })
export class AdminToken extends Document {
  @Prop()
  adminId!: string;

  @Prop()
  value!: string;

  @Prop()
  expiration?: Date;
}

export const adminTokenSchema = SchemaFactory.createForClass(AdminToken);
