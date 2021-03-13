/**
 * @author wizard.song
 * @date 2020/09/23 23:52
 */

import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PullRequest } from '../model/pull.request';
import { Database } from 'edu-graph-constant';
import { BaseService } from '../../../base/base.service';

@Injectable()
export class PullRequestService extends BaseService<PullRequest> {
  constructor(
    @InjectModel(Database.PullRequest)
    protected readonly model: Model<PullRequest>
  ) {
    super(model);
  }
}
