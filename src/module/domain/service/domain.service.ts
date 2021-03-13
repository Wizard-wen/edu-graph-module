/**
 * @author wizard.song
 * @date 2020/09/23 23:52
 */

import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Domain } from '../model/domain';
import { Database } from 'edu-graph-constant';
import { BaseService } from '../../../base/base.service';

@Injectable()
export class DomainService extends BaseService<Domain> {
  constructor(
    @InjectModel(Database.Domain)
    protected readonly model: Model<Domain>,
  ) {
    super(model);
  }
}
