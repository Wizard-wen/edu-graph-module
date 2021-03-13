/**
 *
 */

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Database } from 'edu-graph-constant';
import { SectionService } from './service/section.service';
import { sectionSchema } from './model/section';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Database.Section,
        schema: sectionSchema,
      },
    ]),
  ],
  providers: [
    { provide: 'SectionService', useClass: SectionService }
  ],
  exports: [
    { provide: 'SectionService', useClass: SectionService }
  ],
})
export class SectionModule {
}
