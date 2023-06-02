import { http, HttpOptions } from "@next-core/brick-http";

export interface OrganizationApi_SetOrgNamespacesRequestBody {
  /** 模型命名空间 */
  namespaces: string[];
}

/**
 * @description 设置Org模型命名空间[内部]
 * @endpoint PUT /api/v1/org/:id/namespaces
 */
export const OrganizationApi_setOrgNamespaces = (
  id: string | number,
  data: OrganizationApi_SetOrgNamespacesRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.user_service.organization.SetOrgNamespaces@1.0.0 */ http.put<void>(
    `api/gateway/user_service.organization.SetOrgNamespaces/api/v1/org/${id}/namespaces`,
    data,
    options
  );
