import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstalledThemeTemplateApi_InitThemeTemplateRequestBody {
  /** 项目instanceId */
  projectInstanceId: string;

  /** 主题模版id */
  themeId: string;

  /** snippetId */
  snippetId: string;
}

export interface InstalledThemeTemplateApi_InitThemeTemplateResponseBody {
  /** 初始化生成的模板instanceId */
  templateInstanceId?: string;
}

/**
 * @description 初始化theme页面模版
 * @endpoint POST /api/v1/next_builder/theme_template/init
 */
export const InstalledThemeTemplateApi_initThemeTemplate = async (
  data: InstalledThemeTemplateApi_InitThemeTemplateRequestBody,
  options?: HttpOptions
): Promise<InstalledThemeTemplateApi_InitThemeTemplateResponseBody> =>
  /**! @contract easyops.api.next_builder.installed_theme_template.InitThemeTemplate@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<InstalledThemeTemplateApi_InitThemeTemplateResponseBody>
    >(
      "api/gateway/next_builder.installed_theme_template.InitThemeTemplate/api/v1/next_builder/theme_template/init",
      data,
      options
    )
  ).data;
