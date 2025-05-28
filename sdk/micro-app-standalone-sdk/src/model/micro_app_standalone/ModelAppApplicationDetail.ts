/** 用户申请开通微应用详情 */
export interface ModelAppApplicationDetail {
  /** 申请单id */
  id: string;

  /** app id */
  appId: string;

  /** app name */
  appName: string;

  /** 申请人 */
  applicant: string;

  /** 审批人 */
  approver: string;

  /** userType */
  userType: "all" | "part" | "onlyMe";

  /** 用户开通范围(user.name或user_group.instanceId，后者以:开头) */
  userRange: string[];

  /** 申请时间 */
  applicationTime: string;

  /** 审批时间 */
  approvalTime: string;

  /** Launchpad Config */
  launchpadConfig: ModelAppApplicationDetail_launchpadConfig;

  /** 状态 */
  state: "pending" | "approved" | "refused";

  /** locales */
  locales: Record<string, any>;
}

export interface ModelAppApplicationDetail_launchpadConfig {
  /** launchpad instanceId */
  instanceId?: string;

  /** id */
  id?: string;

  /** name */
  name?: string;
}
