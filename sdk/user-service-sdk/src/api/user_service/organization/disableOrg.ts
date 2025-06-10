import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 禁用Org[内部]
 * @endpoint PUT /api/v1/org/:id/disable
 */
export const OrganizationApi_disableOrg = (
  id: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.user_service.organization.DisableOrg@1.0.0 */ http.put<void>(
    `api/gateway/logic.user_service/api/v1/org/${id}/disable`,
    undefined,
    options
  );
