import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface PackageAloneApi_PackageStandAloneWithBaseRequestBody {
  /** Base包Id */
  packageId: string;

  /** Base版本Id */
  versionId: string;

  /** 新的版本号，例如: 1.1.0 */
  newVersion: string;

  /** 版本描述信息 */
  description?: string;

  /** 新的依赖 */
  newDependencies?: PackageAloneApi_PackageStandAloneWithBaseRequestBody_newDependencies_item[];
}

export interface PackageAloneApi_PackageStandAloneWithBaseResponseBody {
  /** packageStandAlone releasedLogInstanceId */
  releasedLogInstanceId?: string;
}

/**
 * @description 基于Base版本独立打包
 * @endpoint POST /api/v1/next_builder/package_standalone_with_base
 */
export const PackageAloneApi_packageStandAloneWithBase = async (
  data: PackageAloneApi_PackageStandAloneWithBaseRequestBody,
  options?: HttpOptions
): Promise<PackageAloneApi_PackageStandAloneWithBaseResponseBody> =>
  /**! @contract easyops.api.next_builder.package_alone.PackageStandAloneWithBase@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<PackageAloneApi_PackageStandAloneWithBaseResponseBody>
    >(
      "api/gateway/next_builder.package_alone.PackageStandAloneWithBase/api/v1/next_builder/package_standalone_with_base",
      data,
      options
    )
  ).data;

export interface PackageAloneApi_PackageStandAloneWithBaseRequestBody_newDependencies_item {
  /** 依赖组件名称 */
  name?: string;

  /** 依赖组件版本 */
  version?: string;
}
