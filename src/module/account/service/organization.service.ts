/**
 * @author wizard.song
 * @date 2020/09/23 23:52
 */

import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Organization } from '../model/organization';
import { Database } from 'edu-graph-constant';
import { BaseService } from '../../../base/base.service';

@Injectable()
export class OrganizationService extends BaseService<Organization> {
  constructor(
    @InjectModel(Database.Organization)
    protected readonly model: Model<Organization>
  ) {
    super(model);
  }
}
