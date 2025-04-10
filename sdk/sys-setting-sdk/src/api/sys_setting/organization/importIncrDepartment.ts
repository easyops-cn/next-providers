import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface OrganizationApi_ImportIncrDepartmentRequestBody {
  /** 上传部门信息Excel文件 */
  file: File;
}

export interface OrganizationApi_ImportIncrDepartmentResponseBody {
  /** 新增数量 */
  createCount?: number;

  /** 更新数量 */
  updateCount?: number;
}

/** 
 * @description 增量导入部门信息（Excel导入） (文件中存在，组织架构中也存在的部门，执行更新操作
文件中存在，组织架构中不存在的部门，执行添加操作)
* @endpoint POST /api/sys_setting/v1/file/organization/batch/department/import_incr 
 */
export const OrganizationApi_importIncrDepartment = async (
  data: OrganizationApi_ImportIncrDepartmentRequestBody,
  options?: HttpOptions
): Promise<OrganizationApi_ImportIncrDepartmentResponseBody> => {
  /**! @contract easyops.api.sys_setting.organization.ImportIncrDepartment@1.0.0 */ const _formData =
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
      ResponseBodyWrapper<OrganizationApi_ImportIncrDepartmentResponseBody>
    >(
      "api/gateway/logic.sys_setting/api/sys_setting/v1/file/organization/batch/department/import_incr",
      _formData,
      options
    )
  ).data;
};
