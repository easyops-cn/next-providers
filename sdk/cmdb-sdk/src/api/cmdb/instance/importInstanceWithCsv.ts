import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceApi_ImportInstanceWithCsvRequestBody {
  /** 导入实例的字段 */
  keys: string[];

  /** csv文件 */
  attachment: File;
}

export interface InstanceApi_ImportInstanceWithCsvResponseBody {
  /** 成功插入数量 */
  insert_count: number;

  /** 成功更新数量 */
  update_count: number;

  /** 失败数量 */
  failed_count: number;

  /** 失败数据 */
  data: InstanceApi_ImportInstanceWithCsvResponseBody_data_item[];
}

/**
 * @description 使用csv文件导入实例 (此接口以multipart/form-data方式提交数据)
 * @endpoint POST /import/object/:object_id/instance/csv
 */
export const InstanceApi_importInstanceWithCsv = async (
  object_id: string | number,
  data: InstanceApi_ImportInstanceWithCsvRequestBody,
  options?: HttpOptions
): Promise<InstanceApi_ImportInstanceWithCsvResponseBody> => {
  /**! @contract easyops.api.cmdb.instance.ImportInstanceWithCsv */ const _formData = new FormData();
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
    await http.post<
      ResponseBodyWrapper<InstanceApi_ImportInstanceWithCsvResponseBody>
    >(
      `api/gateway/cmdb.instance.ImportInstanceWithCsv/import/object/${object_id}/instance/csv`,
      _formData,
      options
    )
  ).data;
};

export interface InstanceApi_ImportInstanceWithCsvResponseBody_data_item {
  /** 错误码 */
  code?: number;

  /** 错误信息 */
  error?: string;

  /** 错误数据 */
  data?: Record<string, any>[];
}
