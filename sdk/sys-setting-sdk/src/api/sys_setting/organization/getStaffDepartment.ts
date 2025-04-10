import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface OrganizationApi_GetStaffDepartmentResponseBody {
  /** 部门基本信息 */
  list?: OrganizationApi_GetStaffDepartmentResponseBody_list_item[];
}

/**
 * @description 获取职员所属部门
 * @endpoint GET /api/sys_setting/v1/organization/staff/:staffId/department
 */
export const OrganizationApi_getStaffDepartment = async (
  staffId: string | number,
  options?: HttpOptions
): Promise<OrganizationApi_GetStaffDepartmentResponseBody> =>
  /**! @contract easyops.api.sys_setting.organization.GetStaffDepartment@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<OrganizationApi_GetStaffDepartmentResponseBody>
    >(
      `api/gateway/logic.sys_setting/api/sys_setting/v1/organization/staff/${staffId}/department`,
      options
    )
  ).data;

export interface OrganizationApi_GetStaffDepartmentResponseBody_list_item {
  /** 部门ID */
  departmentId?: string;

  /** 部门ID路径， ”/“分隔 */
  departmentIdPath?: string;

  /** 部门名称 */
  name?: string;

  /** 部门名称路径，“/”分隔 */
  namePath?: string;
}
