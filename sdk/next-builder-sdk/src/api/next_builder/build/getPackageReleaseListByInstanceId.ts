import { http, HttpOptions } from "@next-core/brick-http";
import { ModelMicroAppReleasedLog } from "../../../model/next_builder";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface BuildApi_GetPackageReleaseListByInstanceIdRequestParams {
  /** 是否standalone模式的打包记录 */
  isStandalone?: boolean;

  /** 页数, 不传或为0时表示全量查询（不超过3000条） */
  page?: number;

  /** 分页大小 */
  pageSize?: number;
}

export interface BuildApi_GetPackageReleaseListByInstanceIdResponseBody {
  /** 包列表 */
  packages?: Partial<ModelMicroAppReleasedLog>[];
}

/**
 * @description 获取打包记录
 * @endpoint GET /api/v1/next-builder/packages-released/:instanceId
 */
export const BuildApi_getPackageReleaseListByInstanceId = async (
  instanceId: string | number,
  params: BuildApi_GetPackageReleaseListByInstanceIdRequestParams,
  options?: HttpOptions
): Promise<BuildApi_GetPackageReleaseListByInstanceIdResponseBody> =>
  /**! @contract easyops.api.next_builder.build.GetPackageReleaseListByInstanceId@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<BuildApi_GetPackageReleaseListByInstanceIdResponseBody>
    >(
      `api/gateway/next_builder.build.GetPackageReleaseListByInstanceId/api/v1/next-builder/packages-released/${instanceId}`,
      { ...options, params }
    )
  ).data;
