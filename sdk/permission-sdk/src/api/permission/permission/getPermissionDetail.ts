import { http, HttpOptions } from "@next-core/brick-http";
import { ModelPermission } from "../../../model/permission";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface GetPermissionDetailResponseBody {
  /** 数据 */
  data?: Partial<ModelPermission>;
}

/**
 * @description 获取权限点详情信息
 * @endpoint GET /api/v1/permission/:id
 */
export const getPermissionDetail = async (
  id: string | number,
  options?: HttpOptions
): Promise<GetPermissionDetailResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<GetPermissionDetailResponseBody>>(
      `api/gateway/permission.permission.GetPermissionDetail/api/v1/permission/${id}`,
      options
    )
  ).data;
