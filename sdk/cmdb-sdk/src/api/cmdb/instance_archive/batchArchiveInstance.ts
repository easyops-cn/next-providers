import { http, HttpOptions } from "@next-core/brick-http";

export interface BatchArchiveInstanceRequestBody {
  /** 实例Id列表 */
  instanceIds: string[];
}

/**
 * @description 批量归档实例
 * @endpoint POST /object/:object_id/instance_archive_instances
 */
export const batchArchiveInstance = (
  object_id: string | number,
  data: BatchArchiveInstanceRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.cmdb.instance_archive.BatchArchiveInstance */ http.post<void>(
    `api/gateway/cmdb.instance_archive.BatchArchiveInstance/object/${object_id}/instance_archive_instances`,
    data,
    options
  );
