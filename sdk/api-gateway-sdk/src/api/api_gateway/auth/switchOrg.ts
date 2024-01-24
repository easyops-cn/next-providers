import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AuthApi_SwitchOrgRequestBody {
  /** 切换到哪个组织 (具体是哪个用户切换组织，从 context 中获取 username) */
  org: number;
}

export interface AuthApi_SwitchOrgResponseBody {
  /** 用户名 */
  username?: string;

  /** 组织 org */
  org?: number;

  /** 用户 id */
  userInstanceId?: string;

  /** 判断当前登录用户是否是系统管理员 */
  isAdmin?: boolean;

  /** 主名称 次名称 */
  userShowValue?: string[];
}

/**
 * @description 多组织用户切换组织
 * @endpoint POST /api/auth/login/switch_org
 */
export const AuthApi_switchOrg = async (
  data: AuthApi_SwitchOrgRequestBody,
  options?: HttpOptions
): Promise<AuthApi_SwitchOrgResponseBody> =>
  /**! @contract easyops.api.api_gateway.auth.SwitchOrg@1.0.0 */ (
    await http.post<ResponseBodyWrapper<AuthApi_SwitchOrgResponseBody>>(
      "api/auth/login/switch_org",
      data,
      options
    )
  ).data;
