import { http, HttpOptions } from "@next-core/brick-http";

export interface OrganizationApi_SetDepartmentStaffRequestBody {
  /** add：添加，remove：移除 */
  action: string;

  /** 添加或移除的用户ID列表 */
  userIds: string[];
}

/**
 * @description 设置部门职员（添加/移除）,职员被移除后，该职员的职位将一并移除
 * @endpoint POST /api/sys_setting/v1/organization/department/:departmentId/staff
 */
export const OrganizationApi_setDepartmentStaff = (
  departmentId: string | number,
  data: OrganizationApi_SetDepartmentStaffRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.sys_setting.organization.SetDepartmentStaff@1.0.0 */ http.post<void>(
    `api/gateway/logic.sys_setting/api/sys_setting/v1/organization/department/${departmentId}/staff`,
    data,
    options
  );
