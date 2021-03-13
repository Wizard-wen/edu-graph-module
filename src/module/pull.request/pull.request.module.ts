/**
 * @author wizard
 * @date 2020/12/30 22:27
 */

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Database } from 'edu-graph-constant';
import { PullRequestService } from './service/pull.request.service';
import { pullRequestSchema } from './model/pull.request';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Database.PullRequest,
        schema: pullRequestSchema,
      },
    ]),
  ],
  providers: [
    { provide: 'PullRequestService', useClass: PullRequestService },
  ],
  exports: [
    { provide: 'PullRequestService', useClass: PullRequestService },
  ],
})
export class PullRequestModule {
}
