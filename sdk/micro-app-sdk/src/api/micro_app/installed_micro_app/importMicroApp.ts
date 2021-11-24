import { http, HttpOptions } from "@next-core/brick-http";
import {
  ModelInstalledMicroAppIcon,
  ModelInstalledMicroAppClonedFrom,
  ModelInstalledMicroAppMenuIcon,
} from "../../../model/micro_app";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstalledMicroAppApi_ImportMicroAppRequestBody {
  /** cmdb唯一标识, 业务逻辑请使用appId作为唯一标识 */
  instanceId?: string;

  /** 小产品首页 */
  homepage?: string;

  /** 小产品名称 */
  name?: string;

  /** 作者 */
  owner?: string;

  /** 小产品配置 */
  storyboardJson?: string;

  /** 安装状态， ok-成功, running-正在安装 */
  installStatus?: "ok" | "running";

  /** NA程序包当前版本 */
  currentVersion?: string;

  /** 标签 */
  tags?: string[];

  /** 小产品在应用商店的版本号 */
  appVersion?: string;

  /** 小产品图标url */
  icons?: Partial<ModelInstalledMicroAppIcon>;

  /** 表示该应用是内部的，不出现在 launchpad 和 app store 中 */
  internal?: "true" | "false";

  /** 私有安装应用, true or false */
  private?: "true" | "false";

  /** 小产品的克隆对象 */
  clonedFrom?: Partial<ModelInstalledMicroAppClonedFrom>;

  /** 状态 */
  status?: "enabled" | "disabled" | "developing";

  /** 图标背景 */
  iconBackground?: string;

  /** 默认配置 */
  defaultConfig?: string;

  /** DependsAll */
  dependsAll?: boolean;

  /** Legacy */
  legacy?: string;

  /** 路由定义 */
  routes?: string;

  /** 元数据定义 */
  meta?: string;

  /** 小产品的菜单中显示的图标 */
  menuIcon?: Partial<ModelInstalledMicroAppMenuIcon>;

  /** 环境配置定义 */
  env?: any;

  /** locales */
  locales?: any;

  /** 可见性等级 */
  visibility?: "internal" | "public";

  /** 布局类型 */
  layoutType?: string;

  /** 是否来自buildPsh方式 */
  isBuildPush?: boolean;

  /** 免登录 */
  noAuthGuard?: boolean;

  /** 默认面包屑配置 */
  breadcrumb?: string;
}

export interface InstalledMicroAppApi_ImportMicroAppResponseBody {
  /** cmdb唯一标识, 业务逻辑请使用appId作为唯一标识 */
  instanceId?: string;
}

/**
 * @description 导入小产品（存在更新，不存在创建）
 * @endpoint POST /api/micro_app/v1/import_installed_micro_app/:appId
 */
export const InstalledMicroAppApi_importMicroApp = async (
  appId: string | number,
  data: InstalledMicroAppApi_ImportMicroAppRequestBody,
  options?: HttpOptions
): Promise<InstalledMicroAppApi_ImportMicroAppResponseBody> =>
  /**! @contract easyops.api.micro_app.installed_micro_app.ImportMicroApp@1.1.0 */ (
    await http.post<
      ResponseBodyWrapper<InstalledMicroAppApi_ImportMicroAppResponseBody>
    >(
      `api/gateway/micro_app.installed_micro_app.ImportMicroApp/api/micro_app/v1/import_installed_micro_app/${appId}`,
      data,
      options
    )
  ).data;
