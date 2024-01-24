import { http, HttpOptions } from "@next-core/brick-http";
import { ModelSsoClient } from "../../../model/user_service";

export interface SsoAuthServerApi_RegisterSsoClientRequestBody {
  /** 应用名称 */
  clientName?: string;

  /** 重定向地址 */
  redirectUri?: string;

  /** 应用负责人 */
  clientUser?: string;

  /** 应用负责人的邮箱 */
  email?: string;

  /** 应用负责人的手机号 */
  phone?: string;

  /** 应用描述 */
  describe?: string;

  /** 应用图片 */
  clientImage?: ModelSsoClient["clientImage"];
}

/**
 * @description 注册sso client
 * @endpoint POST /api/v1/user_service/sso_auth_server/sso_clients
 */
export const SsoAuthServerApi_registerSsoClient = (
  data: SsoAuthServerApi_RegisterSsoClientRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.user_service.sso_auth_server.RegisterSSOClient@1.0.0 */ http.post<void>(
    "api/gateway/user_service.sso_auth_server.RegisterSSOClient/api/v1/user_service/sso_auth_server/sso_clients",
    data,
    options
  );
