import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 归档实例
 * @endpoint POST /object/:object_id/instance_archive/:instance_id
 */
export const archiveInstance = (
  object_id: string | number,
  instance_id: string | number,
  options?: HttpOptions
): Promise<void> =>
  http.post<void>(
    `api/gateway/cmdb.instance_archive.ArchiveInstance/object/${object_id}/instance_archive/${instance_id}`,
    undefined,
    options
  );
