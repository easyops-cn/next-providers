import { http, HttpOptions } from "@next-core/brick-http";

export interface ExportInstanceRequestBody {
  /** 请求参数json序列化 */
  json?: string;
}

/**
 * @description 实例导出
 * @endpoint POST /object/:object_id/instance/export
 */
export const exportInstance = (
  object_id: string | number,
  data: ExportInstanceRequestBody,
  options?: HttpOptions
): Promise<Blob> =>
  http.post<Blob>(
    `api/gateway/cmdb.instance.ExportInstance/object/${object_id}/instance/export`,
    data,
    { ...options, responseType: "blob" }
  );
