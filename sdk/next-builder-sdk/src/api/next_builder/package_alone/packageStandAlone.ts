import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface PackageAloneApi_PackageStandAloneRequestBody {
  /** projectId */
  projectId: string;

  /** 小产品版本号 */
  version: string;

  /** 版本描述信息 */
  description: string;
}

export interface PackageAloneApi_PackageStandAloneResponseBody {
  /** packageStandAlone releasedLogInstanceId */
  releasedLogInstanceId?: string;
}

/**
 * @description 微应用独立打包
 * @endpoint POST /api/v1/next_builder/package_standalone
 */
export const PackageAloneApi_packageStandAlone = async (
  data: PackageAloneApi_PackageStandAloneRequestBody,
  options?: HttpOptions
): Promise<PackageAloneApi_PackageStandAloneResponseBody> =>
  /**! @contract easyops.api.next_builder.package_alone.PackageStandAlone@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<PackageAloneApi_PackageStandAloneResponseBody>
    >(
      "api/gateway/next_builder.package_alone.PackageStandAlone/api/v1/next_builder/package_standalone",
      data,
      options
    )
  ).data;
