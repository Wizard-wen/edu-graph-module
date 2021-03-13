/**
 * @author wizard
 * @date 2020/12/30 22:27
 */

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Database } from 'edu-graph-constant';
import { PointService } from './service/point.service';
import { pointSchema } from './model/point';
import { PointDetailService } from './service/point.detail.service';
import { pointDetailSchema } from './model/point.detail';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Database.PointDetail,
        schema: pointDetailSchema,
      },
      {
        name: Database.Point,
        schema: pointSchema,
      },
    ]),
  ],
  providers: [
    { provide: 'PointService', useClass: PointService },
    { provide: 'PointDetailService', useClass: PointDetailService },
  ],
  exports: [
    { provide: 'PointService', useClass: PointService },
    { provide: 'PointDetailService', useClass: PointDetailService },
  ],
})
export class PointModule {
}
