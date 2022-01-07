/** 实例查询策略 */
export interface ModelInstanceQueryStrategy {
  /** 策略ID */
  id: string;

  /** 策略名称 */
  name: string;

  /** 策略所属模型id */
  objectId: string;

  /** 策略类型(org 或者 user) */
  type: string;

  /** 策略对应的实例类型(instance 或者 relation) */
  instance_type: string;

  /** 策略内容(包含查询条件和返回的字段,供前端使用，后台逻辑暂时不做校验) */
  query: Record<string, any>;

  /** 显示字段 */
  fields: string[];

  /** 创建时间 */
  ctime: string;

  /** 创建用户 */
  creator: string;

  /** 访问白名单 */
  readAuthorizers: string[];

  /** 修改白名单 */
  updateAuthorizers: string[];

  /** 删除白名单 */
  deleteAuthorizers: string[];
}
