import { http, HttpOptions } from "@next-core/brick-http";
import { ModelAppApplicationDetail } from "../../../model/micro_app_standalone";

export interface OpenPlatformApi_ApprovalRequestBody {
  /** 审批操作 */
  action: "approve" | "refuse";

  /** Launchpad Config */
  launchpadConfig?: ModelAppApplicationDetail["launchpadConfig"];
}

/**
 * @description 审批工单:开通app
 * @endpoint POST /api/v1/open_platform/approval/:id
 */
export const OpenPlatformApi_approval = (
  id: string | number,
  data: OpenPlatformApi_ApprovalRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.micro_app_standalone.open_platform.Approval@1.0.0 */ http.post<void>(
    `api/gateway/logic.micro_app_standalone_service/api/v1/open_platform/approval/${id}`,
    data,
    options
  );
