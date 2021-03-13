/**
 *
 */

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Database } from 'edu-graph-constant';
import { DomainService } from './service/domain.service';
import { domainSchema } from './model/domain';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Database.Domain,
        schema: domainSchema
      }
    ])
  ],
  providers: [
    { provide: 'DomainService', useClass: DomainService }
  ],
  exports: [
    { provide: 'DomainService', useClass: DomainService }
  ]
})
export class DomainModule {
}
