import { http, HttpOptions } from "@next-core/brick-http";
import { ModelMicroAppReleasedLog } from "../../../model/next_builder";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface BuildApi_GetPackageReleaseListByInstanceIdResponseBody {
  /** 包列表 */
  packages?: Partial<ModelMicroAppReleasedLog>[];
}

/**
 * @description 通过project的instanceId获取r环境已打包列表
 * @endpoint GET /api/v1/next-builder/packages-released/:instanceId
 */
export const BuildApi_getPackageReleaseListByInstanceId = async (
  instanceId: string | number,
  options?: HttpOptions
): Promise<BuildApi_GetPackageReleaseListByInstanceIdResponseBody> =>
  /**! @contract easyops.api.next_builder.build.GetPackageReleaseListByInstanceId */ (
    await http.get<
      ResponseBodyWrapper<BuildApi_GetPackageReleaseListByInstanceIdResponseBody>
    >(
      `api/gateway/next_builder.build.GetPackageReleaseListByInstanceId/api/v1/next-builder/packages-released/${instanceId}`,
      options
    )
  ).data;
