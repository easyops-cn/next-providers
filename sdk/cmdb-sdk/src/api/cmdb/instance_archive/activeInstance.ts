import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 激活归档实例
 * @endpoint POST /object/:object_id/instance_active/:instance_id
 */
export const InstanceArchiveApi_activeInstance = (
  object_id: string | number,
  instance_id: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.cmdb.instance_archive.ActiveInstance@1.0.0 */ http.post<void>(
    `api/gateway/cmdb.instance_archive.ActiveInstance/object/${object_id}/instance_active/${instance_id}`,
    undefined,
    options
  );
