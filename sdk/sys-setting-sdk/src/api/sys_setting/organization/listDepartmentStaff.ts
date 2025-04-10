import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper";

export interface OrganizationApi_ListDepartmentStaffRequestParams {
  /** 模糊搜索（用户名，昵称, 联系方式, 邮箱） */
  q?: string;

  /** 页码 */
  page?: number;

  /** 每页用户数 */
  pageSize?: number;
}

export interface OrganizationApi_ListDepartmentStaffResponseItem {
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

  /** 职位 */
  position?: string;
}

export type OrganizationApi_ListDepartmentStaffResponseBody =
  ResponseListWrapper<OrganizationApi_ListDepartmentStaffResponseItem>;

/**
 * @description 获取部门员工列表(当前部门)
 * @endpoint LIST /api/sys_setting/v1/organization/department/:departmentId/staff
 */
export const OrganizationApi_listDepartmentStaff = async (
  departmentId: string | number,
  params: OrganizationApi_ListDepartmentStaffRequestParams,
  options?: HttpOptions
): Promise<OrganizationApi_ListDepartmentStaffResponseBody> =>
  /**! @contract easyops.api.sys_setting.organization.ListDepartmentStaff@1.1.0 */ (
    await http.get<
      ResponseBodyWrapper<OrganizationApi_ListDepartmentStaffResponseBody>
    >(
      `api/gateway/logic.sys_setting/api/sys_setting/v1/organization/department/${departmentId}/staff`,
      { ...options, params }
    )
  ).data;
