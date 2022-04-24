import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceApi_ImportMultiplyInstancesWithExcelRequestBody {
  /** 导入实例的字段,作为更新/创建依据 */
  keys: string[];

  /** excel文件 */
  attachment: File;

  /** 关系操作方式 */
  relation_operation?: "set" | "append";
}

export interface InstanceApi_ImportMultiplyInstancesWithExcelResponseBody {
  /** 成功插入数量 */
  insert_count: number;

  /** 成功更新数量 */
  update_count: number;

  /** 失败数量 */
  failed_count: number;

  /** 失败数据 */
  data: InstanceApi_ImportMultiplyInstancesWithExcelResponseBody_data_item[];
}

/**
 * @description 使用excel文件导入多个实例 (此接口以multipart/form-data方式提交数据)
 * @endpoint POST /import/object/:object_id/multiply_instances/excel
 */
export const InstanceApi_importMultiplyInstancesWithExcel = async (
  object_id: string | number,
  data: InstanceApi_ImportMultiplyInstancesWithExcelRequestBody,
  options?: HttpOptions
): Promise<InstanceApi_ImportMultiplyInstancesWithExcelResponseBody> => {
  /**! @contract easyops.api.cmdb.instance.ImportMultiplyInstancesWithExcel@1.0.0 */ const _formData =
    new FormData();
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
      ResponseBodyWrapper<InstanceApi_ImportMultiplyInstancesWithExcelResponseBody>
    >(
      `api/gateway/cmdb.instance.ImportMultiplyInstancesWithExcel/import/object/${object_id}/multiply_instances/excel`,
      _formData,
      options
    )
  ).data;
};

export interface InstanceApi_ImportMultiplyInstancesWithExcelResponseBody_data_item {
  /** 错误码 */
  code?: number;

  /** 错误信息 */
  error?: string;

  /** 错误实例所在excel行数 */
  line?: number;
}
