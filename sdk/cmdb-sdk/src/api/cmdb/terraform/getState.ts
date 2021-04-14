import { http, HttpOptions } from "@next-core/brick-http";

export interface GetStateRequestParams {
  /** ORG */
  org: number;

  /** 操作用户,默认defaultUser */
  user?: string;
}

/** 详细接口请查看model定义(TFStateV4) */
export type GetStateResponseBody = Record<string, any>;

/**
 * @description 获取state
 * @endpoint GET /api/terraform/v1/object/:objectId/instance/:instanceId/state
 */
export const getState = (
  objectId: string | number,
  instanceId: string | number,
  params: GetStateRequestParams,
  options?: HttpOptions
): Promise<GetStateResponseBody> =>
  /**! @contract easyops.api.cmdb.terraform.GetState */ http.get<GetStateResponseBody>(
    `api/gateway/cmdb.terraform.GetState/api/terraform/v1/object/${objectId}/instance/${instanceId}/state`,
    { ...options, params }
  );
