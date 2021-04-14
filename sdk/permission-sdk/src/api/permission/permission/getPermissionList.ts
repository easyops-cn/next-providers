import { http, HttpOptions } from "@next-core/brick-http";
import { ModelPermission } from "../../../model/permission";

export interface GetPermissionListRequestParams {
  /** 需要鉴权的动作, 全局唯一 */
  action?: string;

  /** action名称过滤，多个用,分隔 */
  action__in?: string;

  /** action名称过滤, 填写关键字 */
  action__like?: string;

  /** 启用/禁用状态过滤, 空为不过滤 */
  status?: "enable" | "disable";

  /** system名称过滤 */
  system?: string;

  /** 分页 */
  page?: number;

  /** 分页大小 */
  page_size?: number;

  /** sdk限制字段使用 */
  XXX_RestFieldMask?: string[];
}

export interface GetPermissionListResponseBody {
  /** 返回码 */
  code?: number;

  /** 总数 */
  total?: number;

  /** 页码 */
  page?: number;

  /** 分页大小 */
  page_size?: number;

  /** 数据 */
  data?: Partial<ModelPermission>[];
}

/**
 * @description 获取权限点列表
 * @endpoint GET /api/v1/permission
 */
export const getPermissionList = (
  params: GetPermissionListRequestParams,
  options?: HttpOptions
): Promise<GetPermissionListResponseBody> =>
  /**! @contract easyops.api.permission.permission.GetPermissionList */ http.get<GetPermissionListResponseBody>(
    "api/gateway/permission.permission.GetPermissionList/api/v1/permission",
    { ...options, params }
  );
