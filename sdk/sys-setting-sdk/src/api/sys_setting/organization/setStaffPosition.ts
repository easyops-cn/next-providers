import { http, HttpOptions } from "@next-core/brick-http";

export interface OrganizationApi_SetStaffPositionRequestBody {
  /** 用户ID列表 */
  userIds: string[];

  /** 职位，后续可能有多个职位，目前只有leader */
  position: string;
}

/**
 * @description 设置职员职位
 * @endpoint POST /api/sys_setting/v1/organization/bulk/:departmentId/staff_position
 */
export const OrganizationApi_setStaffPosition = (
  departmentId: string | number,
  data: OrganizationApi_SetStaffPositionRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.sys_setting.organization.SetStaffPosition@1.0.0 */ http.post<void>(
    `api/gateway/logic.sys_setting/api/sys_setting/v1/organization/bulk/${departmentId}/staff_position`,
    data,
    options
  );
