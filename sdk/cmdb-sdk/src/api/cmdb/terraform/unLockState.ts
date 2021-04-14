import { http, HttpOptions } from "@next-core/brick-http";
import { ModelTfLockInfo } from "../../../model/cmdb";

/** 锁信息 */
export type UnLockStateRequestBody = Partial<ModelTfLockInfo>;

/**
 * @description 解锁工作区
 * @endpoint POST /api/terraform/v1/object/:objectId/instance/:instanceId/state/unlock
 */
export const unLockState = (
  objectId: string | number,
  instanceId: string | number,
  data: UnLockStateRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.cmdb.terraform.UnLockState */ http.post<void>(
    `api/gateway/cmdb.terraform.UnLockState/api/terraform/v1/object/${objectId}/instance/${instanceId}/state/unlock`,
    data,
    options
  );
