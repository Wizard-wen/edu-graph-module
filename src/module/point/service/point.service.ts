/**
 * @author wizard.song
 * @date 2020/09/23 23:52
 */

import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Point } from '../model/point';
import { Database } from 'edu-graph-constant';
import { BaseService } from '../../../base/base.service';

@Injectable()
export class PointService extends BaseService<Point> {
  constructor(
    @InjectModel(Database.Point)
    protected readonly model: Model<Point>
  ) {
    super(model);
  }
}
