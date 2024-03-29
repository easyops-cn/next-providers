import { http, HttpOptions } from "@next-core/brick-http";
import { ModelTfLockInfo } from "../../../model/cmdb";

/** 锁信息 */
export type TerraformApi_LockStateRequestBody = Partial<ModelTfLockInfo>;

/**
 * @description 锁定工作区
 * @endpoint POST /api/terraform/v1/object/:objectId/instance/:instanceId/state/lock
 */
export const TerraformApi_lockState = (
  objectId: string | number,
  instanceId: string | number,
  data: TerraformApi_LockStateRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.cmdb.terraform.LockState@1.0.0 */ http.post<void>(
    `api/gateway/cmdb.terraform.LockState/api/terraform/v1/object/${objectId}/instance/${instanceId}/state/lock`,
    data,
    options
  );
