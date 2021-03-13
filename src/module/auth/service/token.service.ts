/**
 * @author wizard.song
 * @date 2020/09/23 23:52
 */

import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { v1 as uuidV1 } from 'uuid';
import { Token } from '../model/token';
import { Database } from 'edu-graph-constant';
import { BaseService } from '../../../base/base.service';

@Injectable()
export class TokenService extends BaseService<Token> {
  constructor(
    @InjectModel(Database.Token)
    protected readonly model: Model<Token>,
  ) {
    super(model);
  }

  async checkIfHasToken(userId: string): Promise<boolean> {
    const tokenModel = await this.findOneByConditions({ userId });
    return !!tokenModel;
  }

  async createToken(userId: string): Promise<Token> {
    const expirationDate = new Date();
    expirationDate.setDate(new Date().getDate() + 30);
    return await this.model.create({
      userId,
      value: uuidV1(),
      expiration: expirationDate
    });
  }

  async updateToken(userId: string): Promise<Token> {
    const tokenModel = await this.model.findOne({ userId });
    const expirationDate = new Date();
    expirationDate.setDate(new Date().getDate() + 30);
    tokenModel!.expiration = expirationDate;
    tokenModel!.value = uuidV1();
    return await tokenModel!.save();
  }
}
