import { http, HttpOptions } from "@next-core/brick-http";

export interface OrganizationApi_UpdateDepartmentRequestBody {
  /** 名称 */
  name: string;
}

/**
 * @description 编辑部门基本信息
 * @endpoint PUT /api/sys_setting/v1/organization/department/:departmentId
 */
export const OrganizationApi_updateDepartment = (
  departmentId: string | number,
  data: OrganizationApi_UpdateDepartmentRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.sys_setting.organization.UpdateDepartment@1.0.0 */ http.put<void>(
    `api/gateway/sys_setting.organization.UpdateDepartment/api/sys_setting/v1/organization/department/${departmentId}`,
    data,
    options
  );
