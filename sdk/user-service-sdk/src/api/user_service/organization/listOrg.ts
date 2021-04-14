import { http, HttpOptions } from "@next-core/brick-http";
import { ModelOrgInfo } from "../../../model/user_service";

export interface ListOrgResponseBody {
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
export const listOrg = (options?: HttpOptions): Promise<ListOrgResponseBody> =>
  /**! @contract easyops.api.user_service.organization.ListOrg */ http.get<ListOrgResponseBody>(
    "api/gateway/user_service.organization.ListOrg/api/v1/org/list",
    options
  );
