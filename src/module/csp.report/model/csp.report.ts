/**
 * @author songxiwen
 * @date 2020/09/14 23:09
 */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Database } from 'edu-graph-constant';

@Schema({ collection: Database.CSPReport })
export class CSPReport extends Document {
  @Prop()
  documentUri?: string;

  @Prop()
  referrer?: string;

  @Prop()
  violatedDirective?: string;

  @Prop()
  effectiveDirective?: string;

  @Prop()
  originalPolicy?: string;

  @Prop()
  disposition?: string;

  @Prop()
  blockedUri?: string;

  @Prop()
  statusCode?: number;

  @Prop()
  scriptSample?: string;
}

export const cspReportSchema = SchemaFactory.createForClass(CSPReport);
