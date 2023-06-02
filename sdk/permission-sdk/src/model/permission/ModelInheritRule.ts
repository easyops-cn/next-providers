import { ModelInheritNode } from ".";

/** 继承规则定义 */
export interface ModelInheritRule {
  /** 规则id */
  instanceId: string;

  /** 规则名称 */
  name: string;

  /** 路径标识 */
  label: string;

  /** 路径id */
  pathId: string;

  /** 起点模型id */
  sourceObjectId: string;

  /** 触发变更的模型字段 */
  sourceField: string;

  /** 触发变更字段类型 */
  sourceKind: "USER" | "USER_GROUP";

  /** 是否启用 */
  enable: boolean;

  /** 是否异常 */
  abnormal: boolean;

  /** 规则路径 */
  path: Partial<ModelInheritNode>[];

  /** 受影响的所有模型id */
  effectObjectIdList: string[];

  /** query条件key,反向 */
  reverseQueryKey: string;

  /** 是否所有实例开启白名单 */
  effectAll: boolean;

  /** 创建时间 */
  ctime: string;

  /** 编辑时间 */
  mtime: string;
}
