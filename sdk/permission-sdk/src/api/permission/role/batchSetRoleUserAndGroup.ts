import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface RoleApi_BatchSetRoleUserAndGroupRequestBody {
  /** 数据列表 */
  list: RoleApi_BatchSetRoleUserAndGroupRequestBody_list_item[];
}

export interface RoleApi_BatchSetRoleUserAndGroupResponseBody {
  /** 更新的角色数量 */
  count?: number;
}

/**
 * @description 批量设置角色添加用户&用户组
 * @endpoint PUT /api/v1/permission_role/batch_set_role_user_and_group
 */
export const RoleApi_batchSetRoleUserAndGroup = async (
  data: RoleApi_BatchSetRoleUserAndGroupRequestBody,
  options?: HttpOptions
): Promise<RoleApi_BatchSetRoleUserAndGroupResponseBody> =>
  /**! @contract easyops.api.permission.role.BatchSetRoleUserAndGroup */ (
    await http.put<
      ResponseBodyWrapper<RoleApi_BatchSetRoleUserAndGroupResponseBody>
    >(
      "api/gateway/permission.role.BatchSetRoleUserAndGroup/api/v1/permission_role/batch_set_role_user_and_group",
      data,
      options
    )
  ).data;

export interface RoleApi_BatchSetRoleUserAndGroupRequestBody_list_item {
  /** 角色id */
  id?: string;

  /** 用户名列表 */
  operate_user?: string[];

  /** 用户组列表 */
  operate_user_group?: string[];
}
