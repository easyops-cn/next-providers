import { ModelObjectAttr } from ".";

/** 导入模型的message */
export interface ModelObjectImport {
  /** ID */
  objectId: string;

  /** 名称 */
  name: string;

  /** 图标 */
  icon: string;

  /** 分类, 点分表示二级分类 */
  category: string;

  /** 说明 */
  memo: string;

  /** 属性列表 */
  attrList: ModelObjectImport_attrList_item[];

  /** 关系分组列表 */
  relation_groups: ModelObjectImport_relation_groups_item[];

  /** 关系列表 */
  relation_list: ModelObjectImport_relation_list_item[];
}

export interface ModelObjectImport_attrList_item {
  /** 属性ID */
  id?: string;

  /** 属性名称 */
  name?: string;

  /** 'true' 唯一属性 */
  unique?: "true" | "false";

  /** 'true' 只读属性，'false' 可写属性 */
  readonly?: "true" | "false";

  /** 'true' 必填属性，'false' 非必填属性 */
  required?: "true" | "false";

  /** 属性分类 */
  tag?: string[];

  /** 属性的描述 */
  description?: string;

  /** 属性的提示 */
  tips?: string;

  /** 属性值类型，不同类型有不同字段 */
  value?: ModelObjectAttr["value"];
}

export interface ModelObjectImport_relation_groups_item {
  /** 分组ID */
  id?: string;

  /** 分组名称 */
  name?: string;
}

export interface ModelObjectImport_relation_list_item {
  /** 关系名称, 不是必填, 而且在引入了 left_description 和 right_description 之后这个字段几乎处于废弃状态 */
  name?: string;

  /** 关系左端的模型ID */
  left_object_id?: string;

  /** 关系左端模型中表达右端模型实例的别名字段: 比如应用的负责人需要在应用的实例中表达出一个字段; 对已有模型添加关系时这个ID需要加下划线前缀避免冲突 */
  left_id?: string;

  /** 是与 left_id 相反的含义, 但仅用于前端展示 (p.s.: 关系左端模型的描述) */
  left_description?: string;

  /** 关系左端的资源模型实例至少包含多少数量的关系: 目前来说这个字段是过度设计的字段, 一般填0就好了 */
  left_min?: number;

  /** 关系左端的资源模型实例最多包含多少数量的关系: 有数据库级别的索引支持, 一般情况填1 或者 -1, -1表示无限多 */
  left_max?: number;

  /** 关系在左端模型的哪些分组里 */
  left_groups?: string[];

  /** 关系左端标签 */
  left_tags?: string[];

  /** 关系右端的模型ID */
  right_object_id?: string;

  /** 关系右端模型中表达左端模型实例的别名字段: 比如应用的负责人需要在应用的实例中表达出一个字段; 对已有模型添加关系时这个ID需要加下划线前缀避免冲突 */
  right_id?: string;

  /** 是与 right_id 相反的含义, 但仅用于前端展示 (p.s.: 关系右端模型的描述) */
  right_description?: string;

  /** 关系右端的资源模型实例至少包含多少数量的关系: 目前来说这个字段是过度设计的字段, 一般填 0 就好了 */
  right_min?: number;

  /** 关系右端的资源模型实例最多包含多少数量的关系: 有数据库级别的索引支持, 一般情况填 1 或者 -1, -1表示无限多 */
  right_max?: number;

  /** 关系在右端模型的哪些分组里 */
  right_groups?: string[];

  /** 关系右端标签 */
  right_tags?: string[];
}
