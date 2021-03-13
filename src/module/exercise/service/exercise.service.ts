/**
 * @author wizard.song
 * @date 2020/09/23 23:52
 */

import { Injectable } from '@nestjs/common';
import { Model} from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Exercise } from '../model/exercise';
import { Database } from 'edu-graph-constant';
import { BaseService } from '../../../base/base.service';

@Injectable()
export class ExerciseService extends BaseService<Exercise> {
  constructor(
    @InjectModel(Database.Exercise)
    protected readonly model: Model<Exercise>,
  ) {
    super(model);
  }
}
