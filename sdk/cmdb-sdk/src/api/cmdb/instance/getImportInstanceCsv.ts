import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 获取实例导入csv模板文件
 * @endpoint GET /import/object/:object_id/instance/csv
 */
export const InstanceApi_getImportInstanceCsv = (
  object_id: string | number,
  options?: HttpOptions
): Promise<Blob> =>
  /**! @contract easyops.api.cmdb.instance.GetImportInstanceCsv@1.0.0 */ http.get<Blob>(
    `api/gateway/cmdb.instance.GetImportInstanceCsv/import/object/${object_id}/instance/csv`,
    { ...options, responseType: "blob" }
  );
