import { http, HttpOptions } from "@next-core/brick-http";
import { ModelOrgInfo } from "../../../model/user_service";

export interface OrganizationApi_ListOrgResponseBody {
  /** 返回码 */
  code: number;

  /** 错误信息 */
  error: string;

  /** 返回消息 */
  message: string;

  /** org列表 */
  data: Partial<ModelOrgInfo>[];
}

/**
 * @description 获取所有Org[内部]
 * @endpoint GET /api/v1/org/list
 */
export const OrganizationApi_listOrg = (
  options?: HttpOptions
): Promise<OrganizationApi_ListOrgResponseBody> =>
  /**! @contract easyops.api.user_service.organization.ListOrg@1.0.0 */ http.get<OrganizationApi_ListOrgResponseBody>(
    "api/gateway/logic.user_service/api/v1/org/list",
    options
  );
