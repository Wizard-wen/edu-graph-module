/**
 * @author wizard
 * @date 2020/09/14 23:09
 */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  Database,
  PullRequestEntityType,
  PullRequestStatus
} from 'edu-graph-constant';
import type { PullRequestLog } from 'edu-graph-constant';

@Schema({ collection: Database.PullRequest })
export class PullRequest extends Document {
  // 只有自己创建的entity才能提交PR
  // 通过entityId就可以得到申请人id
  @Prop()
  entityId!: string;

  @Prop()
  pullRequestEntityType!: PullRequestEntityType;

  @Prop()
  status!: PullRequestStatus;

  @Prop()
  createdAt!: Date;

  @Prop()
  mergedAt?: Date;

  // ${管理员}${adminId}将PR变成${Merged}状态。${message}
  // ${管理员}${adminId}将PR变成${Failed}状态。${message}
  // ${用户}${userId}将PR变成${Pending}状态。${message}
  @Prop()
  recordList?: PullRequestLog[];
}

export const pullRequestSchema = SchemaFactory.createForClass(PullRequest);
