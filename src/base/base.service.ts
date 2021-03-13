/**
 * @author wizard.song
 * @date 2020/09/23 22:00
 */

import {
  Document,
  FilterQuery,
  Model,
  Types,
  UpdateQuery,
  DocumentDefinition
} from 'mongoose';

export class BaseService<T extends Document> {
  protected readonly model: Model<T>;

  protected constructor(model: Model<T>) {
    this.model = model;
    this.model.create();
  }

  async create(document: DocumentDefinition<T>): Promise<T> {
    return this.model.create(document);
  }

  async createBatch(documents: T[]): Promise<T[]> {
    const result = await this.model.create(...documents);
    return result;
  }

  async findByIdAndDelete(id: string): Promise<T> {
    const result = await this.model.findByIdAndDelete(id).exec();
    if(result) {
      return <T>result;
    }
    throw new Error('no document.');
  }

  async findOneAndRemove(conditions: FilterQuery<T>): Promise<T> {
    const result = await this.model.findOneAndRemove(conditions).exec();
    if(result) {
      return <T>result;
    }
    throw new Error('no document.');
  }

  async deleteByConditions(conditions: FilterQuery<T>): Promise<number> {
    return this.model.deleteMany(conditions).count().exec();
  }

  async updateById(id: string, updateDocument: UpdateQuery<T>): Promise<T> {
    const result = await this.model.findByIdAndUpdate(id, updateDocument).exec();
    if(result) {
      return <T>result;
    }
    throw new Error('no document.');
  }

  async updateByConditions(conditions: FilterQuery<T>, doc: UpdateQuery<T>): Promise<void> {
    await this.model.updateMany(conditions, doc).exec();
  }

  async findAll(): Promise<T[]> {
    return this.model.find().exec();
  }

  async findOneById(id: string): Promise<T> {
    const result = await this.model.findById(id).exec();
    if(result) {
      return <T>result;
    }
    throw new Error('no document.');
  }

  async findByConditions(conditions: FilterQuery<T> = {}): Promise<T[]> {
    return this.model.find(conditions).exec();
  }

  async findOneByConditions(conditions: FilterQuery<T> = {}): Promise<T | undefined> {
    const result = await this.model.findOne(conditions).exec();
    if(result) {
      return <T>result;
    }
    return undefined;
    // throw new Error('no document.');
  }

  async findPageList(
    conditions: {
      skip: number;
      limit: number;
      filter: FilterQuery<T>;
    } = {
      skip: 0,
      limit: 10,
      filter: {}
    }
  ): Promise<T[]> {
    return this.model
      .find(conditions.filter)
      .skip(conditions.skip)
      .limit(conditions.limit)
      .exec();
  }

  async count(conditions: FilterQuery<T> = {}): Promise<number> {
    return this.model.count(conditions).exec();
  }

  private static toObjectId(id: string): Types.ObjectId {
    return Types.ObjectId(id);
  }
}
