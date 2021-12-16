import { http, HttpOptions } from "@next-core/brick-http";

export interface InstanceArchiveApi_BatchArchiveInstanceRequestBody {
  /** 实例Id列表 */
  instanceIds: string[];
}

/**
 * @description 批量归档实例
 * @endpoint POST /object/:object_id/instance_archive_instances
 */
export const InstanceArchiveApi_batchArchiveInstance = (
  object_id: string | number,
  data: InstanceArchiveApi_BatchArchiveInstanceRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.cmdb.instance_archive.BatchArchiveInstance@1.0.0 */ http.post<void>(
    `api/gateway/cmdb.instance_archive.BatchArchiveInstance/object/${object_id}/instance_archive_instances`,
    data,
    options
  );
