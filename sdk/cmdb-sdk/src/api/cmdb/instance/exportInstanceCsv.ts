import { http, HttpOptions } from "@next-core/brick-http";

export interface InstanceApi_ExportInstanceCsvRequestBody {
  /** 请求参数json序列化 */
  json?: string;
}

/**
 * @description 实例导出csv
 * @endpoint POST /object/:object_id/instance/export
 */
export const InstanceApi_exportInstanceCsv = (
  object_id: string | number,
  data: InstanceApi_ExportInstanceCsvRequestBody,
  options?: HttpOptions
): Promise<Blob> =>
  /**! @contract easyops.api.cmdb.instance.ExportInstanceCsv@1.0.0 */ http.post<Blob>(
    `api/gateway/cmdb.instance.ExportInstanceCsv/object/${object_id}/instance/export`,
    data,
    { ...options, responseType: "blob" }
  );
