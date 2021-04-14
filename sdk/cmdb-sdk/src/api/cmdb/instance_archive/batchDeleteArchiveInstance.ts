import { http, HttpOptions } from "@next-core/brick-http";

export interface BatchDeleteArchiveInstanceRequestParams {
  /** 实例Id,使用逗号分隔 */
  instanceIds: string;
}

/**
 * @description 批量删除归档实例
 * @endpoint DELETE /object/:object_id/instance_archive_instances
 */
export const batchDeleteArchiveInstance = (
  object_id: string | number,
  params: BatchDeleteArchiveInstanceRequestParams,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.cmdb.instance_archive.BatchDeleteArchiveInstance */ http.delete<void>(
    `api/gateway/cmdb.instance_archive.BatchDeleteArchiveInstance/object/${object_id}/instance_archive_instances`,
    { ...options, params }
  );
