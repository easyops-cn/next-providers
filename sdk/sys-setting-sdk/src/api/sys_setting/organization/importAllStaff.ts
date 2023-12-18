import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface OrganizationApi_ImportAllStaffRequestBody {
  /** 上传员工部门信息Excel文件 */
  file: File;
}

export interface OrganizationApi_ImportAllStaffResponseBody {
  /** 更新数量 */
  updateCount?: number;
}

/** 
 * @description 全量（覆盖）导入员工部门信息（Excel导入） (文件中存在，用户管理中不存在的员工，忽略
文件中存在，组织架构中不存在的部门，忽略
文件中存在，用户管理中也存在的员工，执行员工部门更新操作，此操作会覆盖员工原有部门信息)
* @endpoint POST /api/sys_setting/v1/file/organization/batch/staff/import_all 
 */
export const OrganizationApi_importAllStaff = async (
  data: OrganizationApi_ImportAllStaffRequestBody,
  options?: HttpOptions
): Promise<OrganizationApi_ImportAllStaffResponseBody> => {
  /**! @contract easyops.api.sys_setting.organization.ImportAllStaff@1.0.0 */ const _formData =
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
      ResponseBodyWrapper<OrganizationApi_ImportAllStaffResponseBody>
    >(
      "api/gateway/sys_setting.organization.ImportAllStaff/api/sys_setting/v1/file/organization/batch/staff/import_all",
      _formData,
      options
    )
  ).data;
};
