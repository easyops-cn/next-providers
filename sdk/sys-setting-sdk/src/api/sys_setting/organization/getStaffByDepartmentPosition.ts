import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface OrganizationApi_GetStaffByDepartmentPositionRequestParams {
  /** 职位，后续可能有多个职位，目前只有leader */
  position: string;
}

export interface OrganizationApi_GetStaffByDepartmentPositionResponseBody {
  /** 职位人员列表 */
  list?: OrganizationApi_GetStaffByDepartmentPositionResponseBody_list_item[];
}

/**
 * @description 获取某部门下的某职位的职员
 * @endpoint GET /api/sys_setting/v1/organization/department/:departmentId/staff_position
 */
export const OrganizationApi_getStaffByDepartmentPosition = async (
  departmentId: string | number,
  params: OrganizationApi_GetStaffByDepartmentPositionRequestParams,
  options?: HttpOptions
): Promise<OrganizationApi_GetStaffByDepartmentPositionResponseBody> =>
  /**! @contract easyops.api.sys_setting.organization.GetStaffByDepartmentPosition@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<OrganizationApi_GetStaffByDepartmentPositionResponseBody>
    >(
      `api/gateway/logic.sys_setting/api/sys_setting/v1/organization/department/${departmentId}/staff_position`,
      { ...options, params }
    )
  ).data;

export interface OrganizationApi_GetStaffByDepartmentPositionResponseBody_list_item {
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
