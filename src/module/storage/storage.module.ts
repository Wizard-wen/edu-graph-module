/**
 * @author wizard
 * @date 2021/02/22 22:27
 */

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Database } from 'edu-graph-constant';
import { StorageService } from './service/storage.service';
import { storageSchema } from './model/storage';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Database.Storage,
        schema: storageSchema
      }
    ])
  ],
  providers: [
    { provide: 'StorageService', useClass: StorageService }
  ],
  exports: [
    { provide: 'StorageService', useClass: StorageService }
  ]
})
export class StorageModule {
}
