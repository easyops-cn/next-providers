import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface GatewayApi_UserRegisterRequestBody {
  /** 用户名 */
  name: string;

  /** 密码 */
  password: string;

  /** 邮箱 */
  email: string;

  /** 邀请码 */
  invite: string;
}

export interface GatewayApi_UserRegisterResponseBody {
  /** 用户名 */
  name: string;

  /** 邮箱 */
  email: string;

  /** org */
  org: number;

  /** 用户instanceId */
  instanceId: string;
}

/**
 * @description 用户邀请注册
 * @endpoint POST /api/user_service/v1/users/register
 */
export const GatewayApi_userRegister = async (
  data: GatewayApi_UserRegisterRequestBody,
  options?: HttpOptions
): Promise<GatewayApi_UserRegisterResponseBody> =>
  /**! @contract easyops.api.user_service.gateway.UserRegister@1.0.0 */ (
    await http.post<ResponseBodyWrapper<GatewayApi_UserRegisterResponseBody>>(
      "api/gateway/user_service.gateway.UserRegister/api/user_service/v1/users/register",
      data,
      options
    )
  ).data;
