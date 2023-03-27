import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface UnionPayApi_UnionPayLoginRequestBody {
  /** 用户名 */
  username: string;

  /** 密码 */
  password: string;

  /** 验证码 */
  phrase?: string;
}

export interface UnionPayApi_UnionPayLoginResponseBody {
  /** 是否登录成功 */
  isLoggedIn?: boolean;

  /** 用户名 */
  username?: string;

  /** 用户instanceId */
  userInstanceId?: string;

  /** 客户id */
  org?: number;

  /** 用户来源 */
  loginFrom?: string;

  /** 判断当前登录用户是否是系统管理员 */
  isAdmin?: boolean;

  /** 是否需要进行mfa验证 */
  isNeedMfa?: boolean;
}

/**
 * @description 银联国际登录(定制化接口)
 * @endpoint POST /api/v1/api_gateway/union_pay/login
 */
export const UnionPayApi_unionPayLogin = async (
  data: UnionPayApi_UnionPayLoginRequestBody,
  options?: HttpOptions
): Promise<UnionPayApi_UnionPayLoginResponseBody> =>
  /**! @contract easyops.api.api_gateway.union_pay.UnionPayLogin@1.0.0 */ (
    await http.post<ResponseBodyWrapper<UnionPayApi_UnionPayLoginResponseBody>>(
      "api/v1/api_gateway/union_pay/login",
      data,
      options
    )
  ).data;
