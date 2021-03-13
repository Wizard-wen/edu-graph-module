/**
 * @author wizard.song
 * @date 2020/09/23 23:52
 */

import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Database } from 'edu-graph-constant';
import { Storage } from '../model/storage';
import { BaseService } from '../../../base/base.service';

@Injectable()
export class StorageService extends BaseService<Storage> {
  constructor(
    @InjectModel(Database.Storage)
    protected readonly model: Model<Storage>
  ) {
    super(model);
  }
}
