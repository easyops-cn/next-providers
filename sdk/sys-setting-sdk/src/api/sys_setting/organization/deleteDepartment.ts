import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 删除部门，会删除部门下的子部门，同时解除部门与职员的关系，职员在该部门的职责也会一并移除
 * @endpoint DELETE /api/sys_setting/v1/organization/department/:departmentId
 */
export const OrganizationApi_deleteDepartment = (
  departmentId: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.sys_setting.organization.DeleteDepartment@1.0.0 */ http.delete<void>(
    `api/gateway/logic.sys_setting/api/sys_setting/v1/organization/department/${departmentId}`,
    options
  );
