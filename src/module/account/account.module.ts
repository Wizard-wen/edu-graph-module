/**
 * @author wizard.song
 * @date 2020/12/19 23:21
 */

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Database } from 'edu-graph-constant';
import { userSchema } from './model/user';
import { UserService } from './service/user.service';
import { organizationSchema } from './model/organization';
import { OrganizationService } from './service/organization.service';
import { adminSchema } from './model/admin';
import { AdminService } from './service/admin.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Database.User,
        schema: userSchema,
      },
      {
        name: Database.Admin,
        schema: adminSchema,
      },
      {
        name: Database.Organization,
        schema: organizationSchema,
      },
    ]),
  ],
  providers: [
    { provide: 'UserService', useClass: UserService },
    { provide: 'OrganizationService', useClass: OrganizationService },
    { provide: 'AdminService', useClass: AdminService },
  ],
  exports: [
    { provide: 'UserService', useClass: UserService },
    { provide: 'OrganizationService', useClass: OrganizationService },
    { provide: 'AdminService', useClass: AdminService },

  ],
})
export class AccountModule {
}
