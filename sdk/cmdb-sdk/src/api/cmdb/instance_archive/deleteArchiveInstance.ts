import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 删除归档实例
 * @endpoint DELETE /object/:object_id/instance_archive/:instance_id
 */
export const deleteArchiveInstance = (
  object_id: string | number,
  instance_id: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.cmdb.instance_archive.DeleteArchiveInstance */ http.delete<void>(
    `api/gateway/cmdb.instance_archive.DeleteArchiveInstance/object/${object_id}/instance_archive/${instance_id}`,
    options
  );
