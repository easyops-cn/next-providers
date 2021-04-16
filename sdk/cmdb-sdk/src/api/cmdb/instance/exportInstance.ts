import { http, HttpOptions } from "@next-core/brick-http";

export interface InstanceApi_ExportInstanceRequestBody {
  /** 请求参数json序列化 */
  json?: string;
}

/**
 * @description 实例导出
 * @endpoint POST /object/:object_id/instance/export
 */
export const InstanceApi_exportInstance = (
  object_id: string | number,
  data: InstanceApi_ExportInstanceRequestBody,
  options?: HttpOptions
): Promise<Blob> =>
  /**! @contract easyops.api.cmdb.instance.ExportInstance */ http.post<Blob>(
    `api/gateway/cmdb.instance.ExportInstance/object/${object_id}/instance/export`,
    data,
    { ...options, responseType: "blob" }
  );
