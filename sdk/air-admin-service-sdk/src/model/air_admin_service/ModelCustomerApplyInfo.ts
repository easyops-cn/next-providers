/** 客户申请信息 */
export interface ModelCustomerApplyInfo {
  /** 用户姓名 */
  userName: string;

  /** 注册成功后的easyops平台的用户名 */
  userId: string;

  /** 性别 */
  gender: "male" | "female";

  /** 邮箱 */
  email: string;

  /** 手机号码 */
  phone: string;

  /** 企业名称 */
  company: string;

  /** 企业网址 */
  website: string;

  /** 所属行业 */
  industry:
    | "internet"
    | "opeators"
    | "banking"
    | "electircity"
    | "logistics"
    | "finance"
    | "government"
    | "enterprise_service"
    | "system_integration"
    | "other";

  /** 公司规模 */
  scale: "below_50" | "below_100" | "below_200" | "above_200";

  /** 所在职位 */
  position:
    | "maintenance-engineer"
    | "RD"
    | "CEO"
    | "CIO"
    | "CTO"
    | "technical-support-engineer"
    | "IT-counselor"
    | "other";

  /** 审批状态 */
  state: "approved" | "on-going" | "pending" | "disapproved";
}
