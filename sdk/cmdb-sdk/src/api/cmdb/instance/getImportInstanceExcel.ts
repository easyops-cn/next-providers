import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 获取实例导入excel模板文件
 * @endpoint GET /import/object/:object_id/instance/excel
 */
export const getImportInstanceExcel = (
  object_id: string | number,
  options?: HttpOptions
): Promise<Blob> =>
  http.get<Blob>(
    `api/gateway/cmdb.instance.GetImportInstanceExcel/import/object/${object_id}/instance/excel`,
    { ...options, responseType: "blob" }
  );
