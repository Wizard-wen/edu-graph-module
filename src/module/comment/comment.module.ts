/**
 * @author wizard
 * @date 2021/02/22 22:27
 */

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Database } from 'edu-graph-constant';
import { CommentService } from './service/comment.service';
import { commentSchema } from './model/comment';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Database.Comment,
        schema: commentSchema
      }
    ])
  ],
  providers: [
    { provide: 'CommentService', useClass: CommentService }
  ],
  exports: [
    { provide: 'CommentService', useClass: CommentService }
  ]
})
export class CommentModule {
}
