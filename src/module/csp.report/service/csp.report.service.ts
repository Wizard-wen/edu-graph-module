/**
 * @author wizard.song
 * @date 2020/09/23 23:52
 */

import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CSPReport } from '../model/csp.report';
import { Database } from 'edu-graph-constant';
import { BaseService } from '../../../base/base.service';

@Injectable()
export class CSPReportService extends BaseService<CSPReport> {
  constructor(
    @InjectModel(Database.CSPReport)
    protected readonly model: Model<CSPReport>,
  ) {
    super(model);
  }
}
