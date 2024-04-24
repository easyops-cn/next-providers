import { http, HttpOptions } from "@next-core/brick-http";

export interface InstanceBaselineApi_BatchCreateInstanceBaselineRequestBody {
  /** 实例Id列表 */
  instanceIds: string[];
}

/**
 * @description 批量创建实例基线
 * @endpoint POST /object/:object_id/create_instance_baseline
 */
export const InstanceBaselineApi_batchCreateInstanceBaseline = (
  object_id: string | number,
  data: InstanceBaselineApi_BatchCreateInstanceBaselineRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.cmdb.instance_baseline.BatchCreateInstanceBaseline@1.0.0 */ http.post<void>(
    `api/gateway/cmdb.instance_baseline.BatchCreateInstanceBaseline/object/${object_id}/create_instance_baseline`,
    data,
    options
  );
