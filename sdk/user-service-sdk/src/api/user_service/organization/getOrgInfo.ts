import { http, HttpOptions } from "@next-core/brick-http";
import { ModelOrgInfo } from "../../../model/user_service";
import { ResponseBodyWrapper } from "../../../wrapper";

export type OrganizationApi_GetOrgInfoResponseBody = Partial<ModelOrgInfo> &
  ModelOrgInfo_partial_3;

/**
 * @description 获取Org信息[内部]
 * @endpoint GET /api/v1/org/info/:id
 */
export const OrganizationApi_getOrgInfo = async (
  id: string | number,
  options?: HttpOptions
): Promise<OrganizationApi_GetOrgInfoResponseBody> =>
  /**! @contract easyops.api.user_service.organization.GetOrgInfo@1.0.0 */ (
    await http.get<ResponseBodyWrapper<OrganizationApi_GetOrgInfoResponseBody>>(
      `api/gateway/user_service.organization.GetOrgInfo/api/v1/org/info/${id}`,
      options
    )
  ).data;

export interface ModelOrgInfo_partial_3 {
  /** org */
  id: number;

  /** 过期时间戳, -1为永不过期 */
  expires: number;

  /** 创建日期 */
  createAt: string;

  /** 是否可用 */
  valid: boolean;

  /** 更新时间戳 */
  ts: number;
}
