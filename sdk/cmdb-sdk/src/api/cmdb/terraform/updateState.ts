import { http, HttpOptions } from "@next-core/brick-http";

/** state内容, 暂不约束,请查看model定义(TFStateV4) */
export type UpdateStateRequestBody = Record<string, any>;

/**
 * @description 更新state
 * @endpoint POST /api/terraform/v1/object/:objectId/instance/:instanceId/state
 */
export const updateState = (
  objectId: string | number,
  instanceId: string | number,
  data: UpdateStateRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.cmdb.terraform.UpdateState */ http.post<void>(
    `api/gateway/cmdb.terraform.UpdateState/api/terraform/v1/object/${objectId}/instance/${instanceId}/state`,
    data,
    options
  );
