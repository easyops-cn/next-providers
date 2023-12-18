import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface OrganizationApi_AddDepartmentRequestBody {
  /** 名称 */
  name: string;

  /** 父部门id */
  parentDepartmentId?: string;
}

export interface OrganizationApi_AddDepartmentResponseBody {
  /** 部门id */
  departmentId: string;
}

/**
 * @description 添加部门
 * @endpoint POST /api/sys_setting/v1/organization/department
 */
export const OrganizationApi_addDepartment = async (
  data: OrganizationApi_AddDepartmentRequestBody,
  options?: HttpOptions
): Promise<OrganizationApi_AddDepartmentResponseBody> =>
  /**! @contract easyops.api.sys_setting.organization.AddDepartment@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<OrganizationApi_AddDepartmentResponseBody>
    >(
      "api/gateway/sys_setting.organization.AddDepartment/api/sys_setting/v1/organization/department",
      data,
      options
    )
  ).data;
