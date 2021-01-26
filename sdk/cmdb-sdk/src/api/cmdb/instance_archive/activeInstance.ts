import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 激活归档实例
 * @endpoint POST /object/:object_id/instance_active/:instance_id
 */
export const activeInstance = (
  object_id: string | number,
  instance_id: string | number,
  options?: HttpOptions
): Promise<void> =>
  http.post<void>(
    `api/gateway/cmdb.instance_archive.ActiveInstance/object/${object_id}/instance_active/${instance_id}`,
    undefined,
    options
  );
