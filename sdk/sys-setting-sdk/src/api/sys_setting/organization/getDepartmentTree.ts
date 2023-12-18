import { http, HttpOptions } from "@next-core/brick-http";
import { ModelDepartmentTreeView } from "../../../model/sys_setting";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface OrganizationApi_GetDepartmentTreeRequestParams {
  /** 部门id */
  departmentId?: string;

  /** 是否展示先祖部门节点 */
  showAncestor?: boolean;
}

export interface OrganizationApi_GetDepartmentTreeResponseBody {
  /** 组织部门树 */
  tree?: Partial<ModelDepartmentTreeView>[];
}

/**
 * @description 获取组织部门树，增加单独获取部门下子部门的能力
 * @endpoint GET /api/sys_setting/v1/organization/department_tree
 */
export const OrganizationApi_getDepartmentTree = async (
  params: OrganizationApi_GetDepartmentTreeRequestParams,
  options?: HttpOptions
): Promise<OrganizationApi_GetDepartmentTreeResponseBody> =>
  /**! @contract easyops.api.sys_setting.organization.GetDepartmentTree@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<OrganizationApi_GetDepartmentTreeResponseBody>
    >(
      "api/gateway/sys_setting.organization.GetDepartmentTree/api/sys_setting/v1/organization/department_tree",
      { ...options, params }
    )
  ).data;
