import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ImportInstanceWithExcelRequestBody {
  /** 导入实例的字段,作为更新/创建依据 */
  keys: string[];

  /** excel文件 */
  attachment: File;

  /** 关系操作方式 */
  relation_operation?: "set" | "append";
}

export interface ImportInstanceWithExcelResponseBody {
  /** 成功插入数量 */
  insert_count: number;

  /** 成功更新数量 */
  update_count: number;

  /** 失败数量 */
  failed_count: number;

  /** 失败数据 */
  data: ImportInstanceWithExcelResponseBody_data_item[];
}

/**
 * @description 使用excel文件导入实例 (此接口以multipart/form-data方式提交数据)
 * @endpoint POST /import/object/:object_id/instance/excel
 */
export const importInstanceWithExcel = async (
  object_id: string | number,
  data: ImportInstanceWithExcelRequestBody,
  options?: HttpOptions
): Promise<ImportInstanceWithExcelResponseBody> => {
  const _formData = new FormData();
  for (const [key, value] of Object.entries(data)) {
    if (Array.isArray(value)) {
      const k = `${key}[]`;
      value.forEach((v) => {
        _formData.append(k, v);
      });
    } else {
      _formData.append(key, value);
    }
  }
  return (
    await http.post<ResponseBodyWrapper<ImportInstanceWithExcelResponseBody>>(
      `api/gateway/cmdb.instance.ImportInstanceWithExcel/import/object/${object_id}/instance/excel`,
      _formData,
      options
    )
  ).data;
};

export interface ImportInstanceWithExcelResponseBody_data_item {
  /** 错误码 */
  code?: number;

  /** 错误信息 */
  error?: string;

  /** 错误实例所在excel行数 */
  line?: number;
}
