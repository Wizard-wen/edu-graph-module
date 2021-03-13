/**
 * @author wizard.song
 * @date 2021/02/22 23:52
 */

import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Comment } from '../model/comment';
import { Database } from 'edu-graph-constant';
import { BaseService } from '../../../base/base.service';

@Injectable()
export class CommentService extends BaseService<Comment> {
  constructor(
    @InjectModel(Database.Comment)
    protected readonly model: Model<Comment>
  ) {
    super(model);
  }
}
