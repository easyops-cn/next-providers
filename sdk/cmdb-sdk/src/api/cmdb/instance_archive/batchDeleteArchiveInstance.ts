import { http, HttpOptions } from "@next-core/brick-http";

export interface InstanceArchiveApi_BatchDeleteArchiveInstanceRequestParams {
  /** 实例Id,使用逗号分隔 */
  instanceIds: string;
}

/**
 * @description 批量删除归档实例
 * @endpoint DELETE /object/:object_id/instance_archive_instances
 */
export const InstanceArchiveApi_batchDeleteArchiveInstance = (
  object_id: string | number,
  params: InstanceArchiveApi_BatchDeleteArchiveInstanceRequestParams,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.cmdb.instance_archive.BatchDeleteArchiveInstance@1.0.0 */ http.delete<void>(
    `api/gateway/cmdb.instance_archive.BatchDeleteArchiveInstance/object/${object_id}/instance_archive_instances`,
    { ...options, params }
  );
