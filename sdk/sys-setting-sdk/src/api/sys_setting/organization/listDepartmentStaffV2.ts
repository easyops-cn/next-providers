import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface OrganizationApi_ListDepartmentStaffV2RequestBody {
  /** 模糊搜索（用户名，昵称, 联系方式, 邮箱） */
  q?: string;

  /** 页码 */
  page?: number;

  /** 每页用户数 */
  pageSize?: number;

  /** 包含子部门员工(默认true, 包含子部门员工) */
  includeSub?: boolean;

  /** 按字段排序, 为空默认按name升序排列 */
  sort?: OrganizationApi_ListDepartmentStaffV2RequestBody_sort_item[];
}

export interface OrganizationApi_ListDepartmentStaffV2ResponseBody {
  /** 实例总数 */
  total?: number;

  /** 页码 */
  page?: number;

  /** 页大小 */
  page_size?: number;

  /** instance list */
  list?: OrganizationApi_ListDepartmentStaffV2ResponseBody_list_item[];
}

/**
 * @description 获取部门员工列表V2(递归所有子部门)
 * @endpoint POST /api/sys_setting/v2/organization/department/:departmentId/staff
 */
export const OrganizationApi_listDepartmentStaffV2 = async (
  departmentId: string | number,
  data: OrganizationApi_ListDepartmentStaffV2RequestBody,
  options?: HttpOptions
): Promise<OrganizationApi_ListDepartmentStaffV2ResponseBody> =>
  /**! @contract easyops.api.sys_setting.organization.ListDepartmentStaffV2@1.1.0 */ (
    await http.post<
      ResponseBodyWrapper<OrganizationApi_ListDepartmentStaffV2ResponseBody>
    >(
      `api/gateway/logic.sys_setting/api/sys_setting/v2/organization/department/${departmentId}/staff`,
      data,
      options
    )
  ).data;

export interface OrganizationApi_ListDepartmentStaffV2RequestBody_sort_item {
  /** 排序key, 支持 name与nickname */
  key?: "name" | "nickname";

  /** 1或-1, 1为升序, -1为降序 */
  order?: number;
}

export interface OrganizationApi_ListDepartmentStaffV2ResponseBody_list_item {
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

  /** 所属部门(向上拿三层组织层级, 多个部门使用分号分隔) */
  department?: string;
}
