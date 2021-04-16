import { http, HttpOptions } from "@next-core/brick-http";

export interface TerraformApi_DeleteStateRequestParams {
  /** ORG */
  org: number;

  /** 操作用户,默认defaultUser */
  user?: string;
}

/**
 * @description 删除state
 * @endpoint DELETE /api/terraform/v1/object/:objectId/instance/:instanceId/state
 */
export const TerraformApi_deleteState = (
  objectId: string | number,
  instanceId: string | number,
  params: TerraformApi_DeleteStateRequestParams,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.cmdb.terraform.DeleteState */ http.delete<void>(
    `api/gateway/cmdb.terraform.DeleteState/api/terraform/v1/object/${objectId}/instance/${instanceId}/state`,
    { ...options, params }
  );
