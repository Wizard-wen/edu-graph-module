/**
 * @author wizard.song
 * @date 2020/09/23 23:52
 */

import { Injectable } from '@nestjs/common';
import { Model} from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Section } from '../model/section';
import { Database } from 'edu-graph-constant';
import { BaseService } from '../../../base/base.service';

@Injectable()
export class SectionService extends BaseService<Section> {
  constructor(
    @InjectModel(Database.Section)
    protected readonly model: Model<Section>,
  ) {
    super(model);
  }
}
