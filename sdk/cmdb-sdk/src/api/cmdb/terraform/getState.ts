import { http, HttpOptions } from "@next-core/brick-http";

export interface TerraformApi_GetStateRequestParams {
  /** ORG */
  org: number;

  /** 操作用户,默认defaultUser */
  user?: string;
}

/** 详细接口请查看model定义(TFStateV4) */
export type TerraformApi_GetStateResponseBody = Record<string, any>;

/**
 * @description 获取state
 * @endpoint GET /api/terraform/v1/object/:objectId/instance/:instanceId/state
 */
export const TerraformApi_getState = (
  objectId: string | number,
  instanceId: string | number,
  params: TerraformApi_GetStateRequestParams,
  options?: HttpOptions
): Promise<TerraformApi_GetStateResponseBody> =>
  /**! @contract easyops.api.cmdb.terraform.GetState@1.0.0 */ http.get<TerraformApi_GetStateResponseBody>(
    `api/gateway/cmdb.terraform.GetState/api/terraform/v1/object/${objectId}/instance/${instanceId}/state`,
    { ...options, params }
  );
