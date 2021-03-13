/**
 * @author wizard.song
 * @date 2020/09/23 23:52
 */

import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Admin } from '../model/admin';
import { Database } from 'edu-graph-constant';
import { BaseService } from '../../../base/base.service';

@Injectable()
export class AdminService extends BaseService<Admin> {
  constructor(
    @InjectModel(Database.Admin)
    protected readonly model: Model<Admin>
  ) {
    super(model);
  }
}
