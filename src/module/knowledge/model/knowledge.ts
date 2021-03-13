/**
 * @author songxiwen
 * @date 2020/09/14 23:09
 */

/**
 * 知识点之间可能存在嵌套引用，例如 a -> b, a -> c, c -> b
 * 循环引用 a -> b, b -> c, c -> a
 * 可以通过他们之间的权重，判断彼此的关系。也可以根据确切的关系，反向推荐彼此的权重关系
 */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Database } from 'edu-graph-constant';

@Schema({ collection: Database.Knowledge })
export class Knowledge extends Document {
  @Prop()
  name!: string;

  @Prop()
  knowledgeBaseTypeId!: string;

  // 所属用户
  // 单个知识点应当只属于某一个用户
  // 同一个类型，同一个知识点，可以由不同的用户创建，彼此无关联
  // 公理性质的知识点可以提交pull request，经过大家的审核之后形成具有权威认证的知识点
  @Prop()
  userId!: string;

  // 前置知识点
  @Prop()
  preKnowledgeIdList?: string[];

  // 导出知识点
  @Prop()
  extendKnowledgeIdList?: string[];

  // // section是仓库内部知识点的
  // @Prop()
  // sectionId?: string;

  // 所属领域
  // 单个知识点应当只属于某一个领域
  @Prop()
  domainId?: string;

  // // 所属仓库id
  // @Prop()
  // repositoryId?: string;

  // 是否已经认证 可以采用经过认证的知识点搭建自己的图结构。若仓库是公开的，则图会被大家看到，大家可以评论这个关联。
  @Prop()
  isCertificated?: boolean;

  // 用户可以在描述中引用其他知识点。引用方式是，在写好描述之后，选中某一段文本，右键搜索，如果搜索到了，则标记为高亮，且可以自动设置为前置知识点。
  @Prop()
  description?: string;

  // 层次id
  @Prop()
  knowledgeLevelId?: string;
}

export const knowledgeSchema = SchemaFactory.createForClass(Knowledge);
