/**
 * @author songxiwen
 * @date 2020/09/14 23:09
 */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Database } from 'edu-graph-constant';

@Schema({ collection: Database.KnowledgeGraphEdge })
export class KnowledgeGraphEdge extends Document {
  // 起始点
  @Prop()
  originKnowledgeId!: string;

  // 终点
  @Prop()
  targetKnowledgeId!: string;

  // 所属知识点，记录知识点id，且记录起始点和终点，是为了让edge有方向，并且确认知识点的归属
  @Prop()
  knowledgeId!: string;

  // 权重，用来描述知识点之间的远近关系
  @Prop()
  weight?: string;

  @Prop()
  description?: string;

  @Prop()
  isCertificated?: boolean;
}

export const knowledgeGraphEdgeSchema = SchemaFactory.createForClass(KnowledgeGraphEdge);
