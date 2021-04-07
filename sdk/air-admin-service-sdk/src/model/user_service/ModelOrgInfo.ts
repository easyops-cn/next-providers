/** 客户Org信息 */
export interface ModelOrgInfo {
  /** org */
  id: number;

  /** 过期时间戳, -1为永不过期 */
  expires: number;

  /** 创建日期 */
  createAt: string;

  /** 是否可用 */
  valid: boolean;

  /** 更新时间戳 */
  ts: number;

  /** 名称 */
  name: string;

  /** 备注 */
  memo: string;

  /** 模型命名空间 */
  namespaces: string[];
}
