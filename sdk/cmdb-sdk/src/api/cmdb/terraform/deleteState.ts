import { http, HttpOptions } from "@next-core/brick-http";

export interface DeleteStateRequestParams {
  /** ORG */
  org: number;

  /** 操作用户,默认defaultUser */
  user?: string;
}

/**
 * @description 删除state
 * @endpoint DELETE /api/terraform/v1/object/:objectId/instance/:instanceId/state
 */
export const deleteState = (
  objectId: string | number,
  instanceId: string | number,
  params: DeleteStateRequestParams,
  options?: HttpOptions
): Promise<void> =>
  http.delete<void>(
    `api/gateway/cmdb.terraform.DeleteState/api/terraform/v1/object/${objectId}/instance/${instanceId}/state`,
    { ...options, params }
  );
