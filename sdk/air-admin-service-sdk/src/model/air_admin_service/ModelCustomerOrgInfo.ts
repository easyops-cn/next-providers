/** 客户的org信息 */
export interface ModelCustomerOrgInfo {
  /** 企业名称 */
  company: string;

  /** org */
  orgId: number;

  /** 联系人 */
  username: string;

  /** 邮箱 */
  email: string;

  /** 证书到期时间戳 */
  expires: number;

  /** org使用状态: 已过期，正常，延期中，即将过期 */
  state: "expired" | "normal" | "updating" | "willExpired";

  /** 客户申请信息的实例Id */
  applyInfoInstanceId: string;

  /** org实例Id */
  orgInfoInstanceId: string;

  /** 平台用户名 */
  userId: string;

  /** 所在行业 */
  industry: string;

  /** 审核时间 */
  auditTime: string;

  /** 审核者 */
  auditor: string;
}
