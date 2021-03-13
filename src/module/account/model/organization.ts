/**
 * @author wizard
 * @date 2020/12/27 23:09
 */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Database } from 'edu-graph-constant';

@Schema({ collection: Database.Organization })
export class Organization extends Document {
  @Prop()
  name!: string;

  @Prop()
  isCertificated?: boolean;
}

export const organizationSchema = SchemaFactory.createForClass(Organization);
