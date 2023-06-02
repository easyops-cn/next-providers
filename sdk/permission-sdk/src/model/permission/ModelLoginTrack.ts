/** 登录轨迹 */
export interface ModelLoginTrack {
  /** 操作 */
  operation: string;

  /** 登录用户 */
  user: string;

  /** 来源 IP */
  ip: string;

  /** 登录结果 */
  result: "success" | "failed";

  /** 会话原因 */
  detail: string;

  /** 操作时间 */
  time: number;
}
