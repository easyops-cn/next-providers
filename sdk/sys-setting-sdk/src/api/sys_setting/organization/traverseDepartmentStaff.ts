import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface OrganizationApi_TraverseDepartmentStaffRequestBody {
  /** 部门ID列表 */
  departmentIds: string[];
}

export interface OrganizationApi_TraverseDepartmentStaffResponseBody {
  /** 用户列表 */
  list?: OrganizationApi_TraverseDepartmentStaffResponseBody_list_item[];
}

/**
 * @description 获取多部门（递归子部门）员工列表
 * @endpoint POST /api/sys_setting/v1/organization/department_staff
 */
export const OrganizationApi_traverseDepartmentStaff = async (
  data: OrganizationApi_TraverseDepartmentStaffRequestBody,
  options?: HttpOptions
): Promise<OrganizationApi_TraverseDepartmentStaffResponseBody> =>
  /**! @contract easyops.api.sys_setting.organization.TraverseDepartmentStaff@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<OrganizationApi_TraverseDepartmentStaffResponseBody>
    >(
      "api/gateway/logic.sys_setting/api/sys_setting/v1/organization/department_staff",
      data,
      options
    )
  ).data;

export interface OrganizationApi_TraverseDepartmentStaffResponseBody_list_item {
  /** 用户实例ID，cmdb中的instanceId */
  instanceId?: string;

  /** 用户名 */
  username?: string;

  /** 昵称 */
  nickname?: string;

  /** 账户状态（invalid 禁用，valid 启用） */
  state?: string;

  /** 用户头像地址 */
  userIcon?: string;

  /** 用户根据showkey组装的展示名 */
  showName?: string;

  /** 用户手机号 */
  userTel?: string;

  /** 用户邮箱 */
  userEmail?: string;
}
