import { http, HttpOptions } from "@next-core/brick-http";
import { ModelAppApplicationDetail } from "../../../model/micro_app_standalone";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper";

export interface OpenPlatformApi_ApplicationListRequestParams {
  /** 页码 */
  page: number;

  /** 每页大小 */
  page_size: number;

  /** query condition: app Id */
  appId?: string;

  /** query condition: app state(多字段用;分开) */
  state?: string;
}

export type OpenPlatformApi_ApplicationListResponseItem =
  Partial<ModelAppApplicationDetail>;

export type OpenPlatformApi_ApplicationListResponseBody =
  ResponseListWrapper<OpenPlatformApi_ApplicationListResponseItem>;

/**
 * @description 申请开通app列表
 * @endpoint LIST /api/v1/open_platform/micro_app/application
 */
export const OpenPlatformApi_applicationList = async (
  params: OpenPlatformApi_ApplicationListRequestParams,
  options?: HttpOptions
): Promise<OpenPlatformApi_ApplicationListResponseBody> =>
  /**! @contract easyops.api.micro_app_standalone.open_platform.ApplicationList@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<OpenPlatformApi_ApplicationListResponseBody>
    >(
      "api/gateway/logic.micro_app_standalone_service/api/v1/open_platform/micro_app/application",
      { ...options, params }
    )
  ).data;
