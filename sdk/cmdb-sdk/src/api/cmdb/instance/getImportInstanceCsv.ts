import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 获取实例导入csv模板文件
 * @endpoint GET /import/object/:object_id/instance/csv
 */
export const getImportInstanceCsv = (
  object_id: string | number,
  options?: HttpOptions
): Promise<Blob> =>
  http.get<Blob>(
    `api/gateway/cmdb.instance.GetImportInstanceCsv/import/object/${object_id}/instance/csv`,
    { ...options, responseType: "blob" }
  );
