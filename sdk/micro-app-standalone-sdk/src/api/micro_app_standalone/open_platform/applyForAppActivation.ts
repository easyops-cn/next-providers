import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface OpenPlatformApi_ApplyForAppActivationRequestBody {
  /** 用户开通范围(user.name或user_group.instanceId，后者以:开头) */
  userRange: string[];

  /** userType */
  userType?: "all" | "part" | "onlyMe";

  /** 微应用name */
  appName?: string;
}

export interface OpenPlatformApi_ApplyForAppActivationResponseBody {
  /** 申请单id */
  id?: string;
}

/**
 * @description 申请app访问权限
 * @endpoint POST /api/v1/open_platform/:appId/apply_for_app_activation
 */
export const OpenPlatformApi_applyForAppActivation = async (
  appId: string | number,
  data: OpenPlatformApi_ApplyForAppActivationRequestBody,
  options?: HttpOptions
): Promise<OpenPlatformApi_ApplyForAppActivationResponseBody> =>
  /**! @contract easyops.api.micro_app_standalone.open_platform.ApplyForAppActivation@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<OpenPlatformApi_ApplyForAppActivationResponseBody>
    >(
      `api/gateway/logic.micro_app_standalone_service/api/v1/open_platform/${appId}/apply_for_app_activation`,
      data,
      options
    )
  ).data;
