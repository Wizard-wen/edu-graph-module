/**
 *
 */

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Database } from 'edu-graph-constant';
import { CSPReportService } from './service/csp.report.service';
import { cspReportSchema } from './model/csp.report';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Database.CSPReport,
        schema: cspReportSchema,
      },
    ]),
  ],
  providers: [
    { provide: 'CSPReportService', useClass: CSPReportService },
  ],
  exports: [
    { provide: 'CSPReportService', useClass: CSPReportService },
  ],
})
export class CSPReportModule {
}
