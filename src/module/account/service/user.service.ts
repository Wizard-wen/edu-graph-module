/**
 * @author wizard.song
 * @date 2020/09/23 23:52
 */

import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../model/user';
import { Database } from 'edu-graph-constant';
import { BaseService } from '../../../base/base.service';

@Injectable()
export class UserService extends BaseService<User> {
  constructor(
    @InjectModel(Database.User)
    protected readonly model: Model<User>
  ) {
    super(model);
  }
}
