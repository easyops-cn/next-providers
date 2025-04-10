import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface OrganizationApi_ImportAllDepartmentRequestBody {
  /** 上传部门信息Excel文件 */
  file: File;
}

export interface OrganizationApi_ImportAllDepartmentResponseBody {
  /** 新增数量 */
  createCount?: number;

  /** 更新数量 */
  updateCount?: number;

  /** 删除数量 */
  deleteCount?: number;
}

/** 
 * @description 全量（覆盖）导入组织架构部门（excel导入） (文件中存在，组织架构中也存在的部门，执行更新操作
文件中存在，组织架构中不存在的部门，执行添加操作
文件中不存在，组织架构中存在的部门，执行删除操作，此操作将会删除子部门，以及移除部门下的成员)
* @endpoint POST /api/sys_setting/v1/file/organization/batch/department/import_all 
 */
export const OrganizationApi_importAllDepartment = async (
  data: OrganizationApi_ImportAllDepartmentRequestBody,
  options?: HttpOptions
): Promise<OrganizationApi_ImportAllDepartmentResponseBody> => {
  /**! @contract easyops.api.sys_setting.organization.ImportAllDepartment@1.0.0 */ const _formData =
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
      ResponseBodyWrapper<OrganizationApi_ImportAllDepartmentResponseBody>
    >(
      "api/gateway/logic.sys_setting/api/sys_setting/v1/file/organization/batch/department/import_all",
      _formData,
      options
    )
  ).data;
};
