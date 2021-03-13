/**
 * @author songxiwen
 * @date 2020/09/14 23:09
 * @description 领域按照父子结构（树形结构）架构。
 * 跨领域的同名知识点应当创建不同的知识点。
 * 用户可以创建自己的一套领域，将知识点维护到自己的领域模型中
 * 官方会维护一套领域，大家可以自行选择自己知识点所属的领域。
 * 提交官方认证的知识点必须属于官方认证的领域下。
 */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Database } from 'edu-graph-constant';

@Schema({ collection: Database.Domain })
export class Domain extends Document {
  @Prop()
  name!: string;

  // 是否已认证
  @Prop()
  isCertificated!: boolean;

  // 领域按父子结构架构
  @Prop()
  parentId?: string;

  @Prop()
  description?: string;
}

export const domainSchema = SchemaFactory.createForClass(Domain);
