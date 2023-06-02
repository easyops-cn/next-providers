import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface PermissionApi_GetPermissionDetailByActionResponseBody {
  /** 权限备注 */
  remark?: string;

  /** 单个资源结构参考PermissionResource. 如果依赖多个资源，资源间判定逻辑条件用%and或者%or来扩住。 比如： { "%or":[ { "system":"flow", "condition":{ "executeAuthorizers":"%user" }, "name":"flow" }, { "system":"tool", "condition":{ "executeAuthorizers":"%user" }, "name":"tool" } ] } 表示这个权限点依赖流程的执行授权白名单和工具的执行授权白名单才能鉴权成功。 */
  resource?: any;

  /** 权限角色 */
  roles?: string[];

  /** 需要鉴权的动作, 全局唯一 */
  action?: string;

  /** 权限点id */
  id?: string;

  /** 角色下用户列表 */
  user?: string[];

  /** 角色下用户组列表 */
  user_group?: string[];
}

/**
 * @description 通过权限名获取权限点详情信息
 * @endpoint GET /api/v1/permission/config/:action
 */
export const PermissionApi_getPermissionDetailByAction = async (
  action: string | number,
  options?: HttpOptions
): Promise<PermissionApi_GetPermissionDetailByActionResponseBody> =>
  /**! @contract easyops.api.permission.permission.GetPermissionDetailByAction@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<PermissionApi_GetPermissionDetailByActionResponseBody>
    >(
      `api/gateway/permission.permission.GetPermissionDetailByAction/api/v1/permission/config/${action}`,
      options
    )
  ).data;
