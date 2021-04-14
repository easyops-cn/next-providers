import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface GetPackageReleaseListResponseBody {
  /** 包列表 */
  packages?: GetPackageReleaseListResponseBody_packages_item[];
}

/**
 * @description 指定环境一键打包上传到r环境
 * @endpoint GET /api/v1/next-builder/packages/:projectId
 */
export const getPackageReleaseList = async (
  projectId: string | number,
  options?: HttpOptions
): Promise<GetPackageReleaseListResponseBody> =>
  /**! @contract easyops.api.next_builder.build.GetPackageReleaseList */ (
    await http.get<ResponseBodyWrapper<GetPackageReleaseListResponseBody>>(
      `api/gateway/next_builder.build.GetPackageReleaseList/api/v1/next-builder/packages/${projectId}`,
      options
    )
  ).data;

export interface GetPackageReleaseListResponseBody_packages_item {
  /** 小产品id */
  appId?: string;

  /** 版本 */
  version?: string;

  /** 版本描述 */
  description?: string;

  /** 打包状态 */
  packageStatus?: string;

  /** 创建用户 */
  commitUser?: string;

  /** 创建时间 */
  ctime?: string;
}
