/** 模型关系查询策略v2 */
export interface ModelRelationQueryStrategyV2 {
  /** 策略ID(可以自定义, 不给定后台会默认生成) */
  id: string;

  /** v3(精确查询)或v4(全量查询字段) */
  byPath: string;

  /** 策略名称 */
  name: string;

  /** 策略类型(org 或者 user) */
  type: string;

  /** 策略内容(包含查询条件和返回的字段, 不指定返回的字段则默认返回name字段, alias ${objectId}.name) */
  path_list: Record<string, any>[];

  /** 策略所属模型id */
  object_id: string;

  /** 创建时间 */
  ctime: string;

  /** 创建用户 */
  creator: string;

  /** 修改时间 */
  mtime: string;

  /** 修改用户 */
  modifier: string;

  /** 访问白名单 */
  readAuthorizers: string[];

  /** 修改白名单 */
  updateAuthorizers: string[];

  /** 删除白名单 */
  deleteAuthorizers: string[];
}
