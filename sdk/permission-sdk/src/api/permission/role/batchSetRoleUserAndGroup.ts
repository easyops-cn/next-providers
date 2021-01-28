import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface BatchSetRoleUserAndGroupRequestBody {
  /** 数据列表 */
  list: BatchSetRoleUserAndGroupRequestBody_list_item[];
}

export interface BatchSetRoleUserAndGroupResponseBody {
  /** 更新的角色数量 */
  count?: number;
}

/**
 * @description 批量设置角色添加用户&用户组
 * @endpoint PUT /api/v1/permission_role/batch_set_role_user_and_group
 */
export const batchSetRoleUserAndGroup = async (
  data: BatchSetRoleUserAndGroupRequestBody,
  options?: HttpOptions
): Promise<BatchSetRoleUserAndGroupResponseBody> =>
  (
    await http.put<ResponseBodyWrapper<BatchSetRoleUserAndGroupResponseBody>>(
      "api/gateway/permission.role.BatchSetRoleUserAndGroup/api/v1/permission_role/batch_set_role_user_and_group",
      data,
      options
    )
  ).data;

export interface BatchSetRoleUserAndGroupRequestBody_list_item {
  /** 角色id */
  id?: string;

  /** 用户名列表 */
  operate_user?: string[];

  /** 用户组列表 */
  operate_user_group?: string[];
}
