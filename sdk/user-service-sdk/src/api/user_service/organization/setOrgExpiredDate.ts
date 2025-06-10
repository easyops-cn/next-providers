import { http, HttpOptions } from "@next-core/brick-http";

export interface OrganizationApi_SetOrgExpiredDateRequestBody {
  /** 过期日期 */
  expired_date: string;
}

/**
 * @description 设置Org过期日期[内部]
 * @endpoint PUT /api/v1/org/:id/_expired_date
 */
export const OrganizationApi_setOrgExpiredDate = (
  id: string | number,
  data: OrganizationApi_SetOrgExpiredDateRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.user_service.organization.SetOrgExpiredDate@1.0.0 */ http.put<void>(
    `api/gateway/logic.user_service/api/v1/org/${id}/_expired_date`,
    data,
    options
  );
