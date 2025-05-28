import { http, HttpOptions } from "@next-core/brick-http";
import { ModelAppApplicationDetail } from "../../../model/micro_app_standalone";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper";

export interface OpenPlatformApi_ApprovalListRequestParams {
  /** 页码 */
  page: number;

  /** 每页大小 */
  page_size: number;

  /** 状态(多状态用;分开) */
  state?: string;
}

export type OpenPlatformApi_ApprovalListResponseItem =
  Partial<ModelAppApplicationDetail>;

export type OpenPlatformApi_ApprovalListResponseBody =
  ResponseListWrapper<OpenPlatformApi_ApprovalListResponseItem>;

/**
 * @description 审批列表
 * @endpoint LIST /api/v1/open_platform/app_application/approval
 */
export const OpenPlatformApi_approvalList = async (
  params: OpenPlatformApi_ApprovalListRequestParams,
  options?: HttpOptions
): Promise<OpenPlatformApi_ApprovalListResponseBody> =>
  /**! @contract easyops.api.micro_app_standalone.open_platform.ApprovalList@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<OpenPlatformApi_ApprovalListResponseBody>
    >(
      "api/gateway/logic.micro_app_standalone_service/api/v1/open_platform/app_application/approval",
      { ...options, params }
    )
  ).data;
