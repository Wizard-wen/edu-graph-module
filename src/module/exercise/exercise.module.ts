/**
 * @author wizard
 * @date 2020/12/30 22:27
 */

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Database } from 'edu-graph-constant';
import { ExerciseService } from './service/exercise.service';
import { exerciseSchema } from './model/exercise';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Database.Exercise,
        schema: exerciseSchema,
      },
    ]),
  ],
  providers: [
    { provide: 'ExerciseService', useClass: ExerciseService }
  ],
  exports: [
    { provide: 'ExerciseService', useClass: ExerciseService }
  ],
})
export class ExerciseModule {
}
