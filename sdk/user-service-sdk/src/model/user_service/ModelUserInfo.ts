/** 用户信息 */
export interface ModelUserInfo {
  /** 实例ID */
  instanceId: string;

  /** 用户名 */
  name: string;

  /** 用户登陆状态 */
  state: "valid" | "invalid" | "";

  /** 用户头像 */
  user_icon: string;

  /** 用户昵称 */
  nickname: string;

  /** 用户邮箱 */
  email: string;

  /** 用户手机号 */
  phone: string;

  /** 创建时间 */
  ctime: string;

  /** 用户Org */
  org: number;

  /** 用户扩展信息 */
  extInfo: Record<string, any>;
}
