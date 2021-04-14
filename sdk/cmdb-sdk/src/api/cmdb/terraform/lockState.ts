import { http, HttpOptions } from "@next-core/brick-http";
import { ModelTfLockInfo } from "../../../model/cmdb";

/** 锁信息 */
export type LockStateRequestBody = Partial<ModelTfLockInfo>;

/**
 * @description 锁定工作区
 * @endpoint POST /api/terraform/v1/object/:objectId/instance/:instanceId/state/lock
 */
export const lockState = (
  objectId: string | number,
  instanceId: string | number,
  data: LockStateRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.cmdb.terraform.LockState */ http.post<void>(
    `api/gateway/cmdb.terraform.LockState/api/terraform/v1/object/${objectId}/instance/${instanceId}/state/lock`,
    data,
    options
  );
