import { http, HttpOptions } from "@next-core/brick-http";

export interface ExportInstanceExcelRequestBody {
  /** e.g.: { name: { $like: '%q%' } }, { $or: [{ name: { $like: '%q%' }}] } */
  query?: Record<string, any>;

  /** e.g.: { instanceId: true, name: true } */
  fields?: Record<string, any>;

  /** 当为 true 时，只搜索与我相关实例 */
  only_my_instance?: boolean;

  /** 对于关联的实例数据是否只获取 relation_view 中指定的属性, 这个字段为 true 时, 会覆盖 fields 字段中指定的二级字段设置 */
  only_relation_view?: boolean;

  /** 按字段排序, 留空默认按照实例ID降序排序(1表示升序, -1表示降序) e.g.: { instanceId: 1 } */
  sort?: Record<string, any>;

  /** 按照权限过滤(通用实例都有 read, update, delete 权限控制, 主机实例在通用实例权限基础上有额外的 operate 权限, 应用实例在通用实例权限基础上有额外的 developClusterOperate, testClusterOperate, prereleaseClusterOperate, productionClusterOperate 权限) e.g.: [ "operate", "update" ] */
  permission?: string[];
}

/**
 * @description 实例导出excel
 * @endpoint POST /export/object/:object_id/instance/excel
 */
export const exportInstanceExcel = (
  object_id: string | number,
  data: ExportInstanceExcelRequestBody,
  options?: HttpOptions
): Promise<Blob> =>
  http.post<Blob>(
    `api/gateway/cmdb.instance.ExportInstanceExcel/export/object/${object_id}/instance/excel`,
    data,
    { ...options, responseType: "blob" }
  );
