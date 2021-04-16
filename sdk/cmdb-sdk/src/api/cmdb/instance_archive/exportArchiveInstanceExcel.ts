import { http, HttpOptions } from "@next-core/brick-http";

export interface InstanceArchiveApi_ExportArchiveInstanceExcelRequestBody {
  /** e.g.: { name: { $like: '%q%' } }, { $or: [{ name: { $like: '%q%' }}] } */
  query?: Record<string, any>;

  /** e.g.: { instanceId: true, name: true }, 默认导出所有字段 */
  fields?: Record<string, any>;

  /** 筛选#showKey对应的字段 */
  key_word?: string;
}

/**
 * @description 归档实例导出excel
 * @endpoint POST /export/object/:object_id/instance_archive/excel
 */
export const InstanceArchiveApi_exportArchiveInstanceExcel = (
  object_id: string | number,
  data: InstanceArchiveApi_ExportArchiveInstanceExcelRequestBody,
  options?: HttpOptions
): Promise<Blob> =>
  /**! @contract easyops.api.cmdb.instance_archive.ExportArchiveInstanceExcel */ http.post<Blob>(
    `api/gateway/cmdb.instance_archive.ExportArchiveInstanceExcel/export/object/${object_id}/instance_archive/excel`,
    data,
    { ...options, responseType: "blob" }
  );
