import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstalledThemeTemplate } from "../../../model/next_builder";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface BuildApi_ThemeExportRequestBody {
  /** 项目instanceId */
  instanceId: string;
}

export type BuildApi_ThemeExportResponseBody =
  Partial<ModelInstalledThemeTemplate>;

/**
 * @description themem模版导出
 * @endpoint POST /api/v1/next-builder/theme-export
 */
export const BuildApi_themeExport = async (
  data: BuildApi_ThemeExportRequestBody,
  options?: HttpOptions
): Promise<BuildApi_ThemeExportResponseBody> =>
  /**! @contract easyops.api.next_builder.build.ThemeExport@1.1.0 */ (
    await http.post<ResponseBodyWrapper<BuildApi_ThemeExportResponseBody>>(
      "api/gateway/next_builder.build.ThemeExport/api/v1/next-builder/theme-export",
      data,
      options
    )
  ).data;
