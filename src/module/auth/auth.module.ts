/**
 * @author wizard
 * @date 2020/12/30 22:27
 */

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Database } from 'edu-graph-constant';
import { TokenService } from './service/token.service';
import { tokenSchema } from './model/token';
import { adminTokenSchema } from './model/admin.token';
import { AdminTokenService } from './service/admin.token.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Database.Token,
        schema: tokenSchema
      },
      {
        name: Database.AdminToken,
        schema: adminTokenSchema
      }
    ])
  ],
  providers: [
    { provide: 'TokenService', useClass: TokenService },
    { provide: 'AdminTokenService', useClass: AdminTokenService }
  ],
  exports: [
    { provide: 'TokenService', useClass: TokenService },
    { provide: 'AdminTokenService', useClass: AdminTokenService }
  ]
})
export class AuthModule {
}
