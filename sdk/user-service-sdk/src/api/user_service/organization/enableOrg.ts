import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 启用Org[内部]
 * @endpoint PUT /api/v1/org/:id/enable
 */
export const enableOrg = (
  id: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.user_service.organization.EnableOrg */ http.put<void>(
    `api/gateway/user_service.organization.EnableOrg/api/v1/org/${id}/enable`,
    undefined,
    options
  );
