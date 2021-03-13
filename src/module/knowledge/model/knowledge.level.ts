/**
 * @author wizard
 * @date 2020/09/14 23:09
 */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Database } from 'edu-graph-constant';
/**
 * 知识点层次，知识点分层次。知识点的层次分维度。
 * 例如，从学历角度，知识点分为学龄前、小学、初中、高中、本科
 * 未来增加了机器学习，可能会得到算法层次，例如从1-100分100个区间段
 * 知识点层次可以理解为知识点对外交互的窗口。
 * 一个知识点与另外的知识点相连接，可以直接互相连接。也可以指定具体的知识点层级连接。
 * 指定了层级的连接有助于后期做不通层次的知识点的筛选。
 */

@Schema({ collection: Database.KnowledgeLevel })
export class KnowledgeLevel extends Document {
  @Prop()
  levelBaseTypeId!: string;

  @Prop()
  name!: string;

  @Prop()
  weight!: number;
}

export const knowledgeLevelSchema = SchemaFactory.createForClass(KnowledgeLevel);
