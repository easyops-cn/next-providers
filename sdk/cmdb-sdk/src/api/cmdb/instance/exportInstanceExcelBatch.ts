import { http, HttpOptions } from "@next-core/brick-http";

export interface InstanceApi_ExportInstanceExcelBatchRequestBody {
  /** 文件名 */
  file_name: string;

  /** 导出列表 */
  export_list: InstanceApi_ExportInstanceExcelBatchRequestBody_export_list_item[];
}

/**
 * @description 实例批量导出excel, 每个模型一个sheet
 * @endpoint POST /batch/export/object/instance/excel
 */
export const InstanceApi_exportInstanceExcelBatch = (
  data: InstanceApi_ExportInstanceExcelBatchRequestBody,
  options?: HttpOptions
): Promise<Blob> =>
  /**! @contract easyops.api.cmdb.instance.ExportInstanceExcelBatch@1.0.0 */ http.post<Blob>(
    "api/gateway/cmdb.instance.ExportInstanceExcelBatch/batch/export/object/instance/excel",
    data,
    { ...options, responseType: "blob" }
  );

export interface InstanceApi_ExportInstanceExcelBatchRequestBody_export_list_item {
  /** 模型Id */
  object_id?: string;

  /** e.g.: { name: { $like: '%q%' } }, { $or: [{ name: { $like: '%q%' }}] } */
  query?: Record<string, any>;

  /** e.g.: { instanceId: true, name: true } */
  fields?: Record<string, any>;

  /** 当为 true 时，只搜索与我相关实例 */
  only_my_instance?: boolean;

  /** 按字段排序, 留空默认按照实例ID降序排序(1表示升序， -1表示降序, 2表示自然升序， -2表示自然降序) e.g.: { instanceId: 1 } */
  sort?: Record<string, any>;

  /** 按照权限过滤(通用实例都有 read, update, delete 权限控制, 主机实例在通用实例权限基础上有额外的 operate 权限, 应用实例在通用实例权限基础上有额外的 developClusterOperate, testClusterOperate, prereleaseClusterOperate, productionClusterOperate 权限) e.g.: [ "operate", "update" ] */
  permission?: string[];
}
