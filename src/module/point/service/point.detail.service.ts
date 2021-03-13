/**
 * @author wizard.song
 * @date 2020/09/23 23:52
 */

import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PointDetail } from '../model/point.detail';
import { Database } from 'edu-graph-constant';
import { BaseService } from '../../../base/base.service';

@Injectable()
export class PointDetailService extends BaseService<PointDetail> {
  constructor(
    @InjectModel(Database.PointDetail)
    protected readonly model: Model<PointDetail>
  ) {
    super(model);
  }
}
