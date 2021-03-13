/**
 * @author wizard.song
 * @date 2020/09/23 23:52
 */

import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { v1 as uuidV1 } from 'uuid';
import { AdminToken } from '../model/admin.token';
import { Database } from 'edu-graph-constant';
import { BaseService } from '../../../base/base.service';

@Injectable()
export class AdminTokenService extends BaseService<AdminToken> {
  constructor(
    @InjectModel(Database.AdminToken)
    protected readonly model: Model<AdminToken>,
  ) {
    super(model);
  }

  async checkIfAdminHasToken(adminId: string): Promise<boolean> {
    const adminTokenModel = await this.findOneByConditions({ adminId });
    return !!adminTokenModel;
  }

  async createAdminToken(adminId: string): Promise<AdminToken> {
    const expirationDate = new Date();
    expirationDate.setDate(new Date().getDate() + 30);
    return await this.model.create({
      adminId,
      value: uuidV1(),
      expiration: expirationDate
    });
  }

  async updateAdminToken(adminId: string): Promise<AdminToken> {
    const adminTokenModel = await this.model.findOne({ adminId });
    const expirationDate = new Date();
    expirationDate.setDate(new Date().getDate() + 30);
    adminTokenModel!.expiration = expirationDate;
    adminTokenModel!.value = uuidV1();
    return await adminTokenModel!.save();
  }
}
