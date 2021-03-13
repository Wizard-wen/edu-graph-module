/**
 * @author wizard.song
 * @date 2020/09/23 23:52
 */

import { Injectable } from '@nestjs/common';
import { Model} from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Repository } from '../model/repository';
import { Database } from 'edu-graph-constant';
import { BaseService } from '../../../base/base.service';

@Injectable()
export class RepositoryService extends BaseService<Repository> {
  constructor(
    @InjectModel(Database.Repository)
    protected readonly model: Model<Repository>,
  ) {
    super(model);
  }
}
