/**
 * @author wizard.song
 * @date 2020/09/28 20:56
 * @description 评论针对的是知识点、习题、连接知识点的边。评论可以由任意用户发出。
 * 评论实体的作者可以回复。
 * 对于评论的评论较为复杂，暂时只支持一问一答式评论回复。
 */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CommentEntityType, Database } from 'edu-graph-constant';

@Schema({ collection: Database.Comment })
export class Comment extends Document {
  @Prop()
  userId!: string;

  // 评论实体类型
  @Prop()
  entityType!: CommentEntityType;

  // 评论实体id
  @Prop()
  entityId!: string;

  @Prop()
  content!: string;

  @Prop()
  star!: number;

  @Prop()
  createdAt!: number;

  @Prop()
  deleted!: boolean;

  // 为了做回复功能，没有parentId的为原始评论，有parentId的盖楼式展示
  @Prop()
  parentId?: string;

  @Prop()
  pictureIds?: string[];

  @Prop()
  hasPicture?: boolean;
}

export const commentSchema = SchemaFactory.createForClass(Comment);
