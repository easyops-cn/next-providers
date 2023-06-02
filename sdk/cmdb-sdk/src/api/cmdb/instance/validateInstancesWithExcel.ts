import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceApi_ValidateInstancesWithExcelRequestBody {
  /** 导入实例的字段,作为更新/创建依据 */
  keys: string[];

  /** excel文件 */
  attachment: File;

  /** 关系操作方式 */
  relation_operation?: "set" | "append";
}

export interface InstanceApi_ValidateInstancesWithExcelResponseBody {
  /** 插入列表 */
  insert_list: Record<string, any>[];

  /** 更新列表 */
  update_list: Record<string, any>[];

  /** 失败数据列表 */
  fail_data: InstanceApi_ValidateInstancesWithExcelResponseBody_fail_data_item[];
}

/**
 * @description 校验excel文件导入多个实例的合法性 (此接口以multipart/form-data方式提交数据)
 * @endpoint POST /validate/object/:object_id/instances/excel
 */
export const InstanceApi_validateInstancesWithExcel = async (
  object_id: string | number,
  data: InstanceApi_ValidateInstancesWithExcelRequestBody,
  options?: HttpOptions
): Promise<InstanceApi_ValidateInstancesWithExcelResponseBody> => {
  /**! @contract easyops.api.cmdb.instance.ValidateInstancesWithExcel@1.0.0 */ const _formData =
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
      ResponseBodyWrapper<InstanceApi_ValidateInstancesWithExcelResponseBody>
    >(
      `api/gateway/cmdb.instance.ValidateInstancesWithExcel/validate/object/${object_id}/instances/excel`,
      _formData,
      options
    )
  ).data;
};

export interface InstanceApi_ValidateInstancesWithExcelResponseBody_fail_data_item {
  /** 错误码 */
  code?: number;

  /** 错误信息 */
  error?: string;

  /** 错误实例所在excel行数 */
  line?: number;
}
