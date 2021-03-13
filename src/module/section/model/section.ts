/**
 * @author songxiwen
 * @date 2020/09/14 23:09
 * @description section一定属于某一个repository
 * 不通repository中的section,即使名字相同，也不会被共用
 * section指代的是仓库中的知识点的总结性的逻辑，属于已经掌握知识点的人对知识结构的顺序、树形架构
 * 可以理解为教材的目录。
 * 但是书本中的知识点之间彼此存在更多的关系，直就是图结构。
 */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Database } from 'edu-graph-constant';

@Schema({ collection: Database.Section })
export class Section extends Document {
  @Prop()
  userId!: string;

  @Prop()
  name!: string;

  // section所属仓库
  @Prop()
  repositoryId!: string;

  @Prop()
  createdAt!: Date;

  @Prop()
  parentId?: string;
}

export const sectionSchema = SchemaFactory.createForClass(Section);
