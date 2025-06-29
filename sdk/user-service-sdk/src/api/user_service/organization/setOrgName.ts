import { http, HttpOptions } from "@next-core/brick-http";

export interface OrganizationApi_SetOrgNameRequestBody {
  /** 名称 */
  name: string;
}

/**
 * @description 设置Org名称[内部]
 * @endpoint PUT /api/v1/org/:id/name
 */
export const OrganizationApi_setOrgName = (
  id: string | number,
  data: OrganizationApi_SetOrgNameRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.user_service.organization.SetOrgName@1.0.0 */ http.put<void>(
    `api/gateway/logic.user_service/api/v1/org/${id}/name`,
    data,
    options
  );
