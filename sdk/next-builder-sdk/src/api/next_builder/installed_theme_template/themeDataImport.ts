import { http, HttpOptions } from "@next-core/brick-http";

export interface InstalledThemeTemplateApi_ThemeDataImportRequestBody {
  /** theme包的数据 */
  themeData?: Record<string, any>;
}

/**
 * @description themem数据部署
 * @endpoint POST /api/v1/next-builder/theme-data-import
 */
export const InstalledThemeTemplateApi_themeDataImport = (
  data: InstalledThemeTemplateApi_ThemeDataImportRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.installed_theme_template.ThemeDataImport@1.1.0 */ http.post<void>(
    "api/gateway/next_builder.installed_theme_template.ThemeDataImport/api/v1/next-builder/theme-data-import",
    data,
    options
  );
