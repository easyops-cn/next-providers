import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface PermissionApi_BatchValidateCmdbPermissionRequestParams {
  /** 需要鉴权的用户名 */
  user: string;

  /** 需要鉴权的权限点 */
  action: string;

  /** 需要鉴权的object_id */
  object_id: string;

  /** 需要鉴权的instance_id列表使用逗号分隔 */
  instance_id: string;

  /** 如果一个权限点有数据权限,但是不想校验数据权限,这个参数传true，默认为false, 须传false */
  validate_action_only?: boolean;

  /** 是否为批量, 须传true */
  batch: boolean;

  /** 传instanceId,_object_id */
  batch_select_fields: string;
}

export interface PermissionApi_BatchValidateCmdbPermissionResponseBody {
  /** 是否鉴权成功 */
  accepted?: boolean;

  /** 是否为管理员 */
  is_admin?: boolean;

  /** 有权限的实例 */
  authorizers?: string[];

  /** 不存在的实例 */
  not_found_instances?: string[];

  /** 无权限的实例 */
  no_permission_instances?: PermissionApi_BatchValidateCmdbPermissionResponseBody_no_permission_instances_item[];
}

/**
 * @description 批量校验cmdb权限
 * @endpoint GET /api/v1/permission/validate
 */
export const PermissionApi_batchValidateCmdbPermission = async (
  params: PermissionApi_BatchValidateCmdbPermissionRequestParams,
  options?: HttpOptions
): Promise<PermissionApi_BatchValidateCmdbPermissionResponseBody> =>
  /**! @contract easyops.api.permission.permission.BatchValidateCmdbPermission */ (
    await http.get<
      ResponseBodyWrapper<PermissionApi_BatchValidateCmdbPermissionResponseBody>
    >(
      "api/gateway/permission.permission.BatchValidateCmdbPermission/api/v1/permission/validate",
      { ...options, params }
    )
  ).data;

export interface PermissionApi_BatchValidateCmdbPermissionResponseBody_no_permission_instances_item {
  /** 实例Id */
  instanceId?: string;
}
