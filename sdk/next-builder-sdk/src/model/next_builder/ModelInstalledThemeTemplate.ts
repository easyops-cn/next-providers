/** 已安装的主题模版 */
export interface ModelInstalledThemeTemplate {
  /** 主题id */
  themeId: string;

  /** 主题名称 */
  name: string;

  /** 布局类型 */
  layoutType: "console" | "business";

  /** 页面模板列表 */
  pageTemplates: ModelInstalledThemeTemplate_pageTemplates_item[];

  /** 模版列表 */
  templates: Record<string, any>[];

  /** 片段列表 */
  snippets: Record<string, any>[];

  /** 依赖列表 */
  dependencies: Record<string, any>[];

  /** 本地化配置 */
  locales: Record<string, any>;

  /** 图片 */
  imgs: Record<string, any>[];

  /** 函数 */
  functions: Record<string, any>[];

  /** 国际化配置 */
  i18n: Record<string, any>[];
}

export interface ModelInstalledThemeTemplate_pageTemplates_item {
  /** 页面类型id */
  pageTypeId?: string;

  /** 页面模板名称 */
  name?: string;

  /** 构件模版id */
  templateId?: string;

  /** snippetId */
  snippetId?: string;

  /** 本地化配置 */
  locales?: Record<string, any>;

  /** 缩略图 */
  thumbnail?: string;

  /** 主题类型 */
  type?: string;
}
