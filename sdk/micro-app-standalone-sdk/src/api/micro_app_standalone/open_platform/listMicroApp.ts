import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstalledMicroApp } from "../../../model/micro_app";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper";

export interface OpenPlatformApi_ListMicroAppRequestParams {
  /** 指定appId查询 */
  appId?: string;

  /** 过滤开通状态(activated/inactive), 空为不过滤 */
  activateStatus?: string;

  /** 按所属Launchpad分类查询, 空为不限制分类 */
  category?: string;

  /** 仅查询未分类应用（优先级比category参数高） */
  uncategorized?: boolean;

  /** 模糊搜索（应用名称、ID、描述） */
  q?: string;

  /** 分页页码 */
  page?: number;

  /** 分页大小 */
  pageSize?: number;
}

export interface OpenPlatformApi_ListMicroAppResponseItem {
  /** cmdb唯一标识, 业务逻辑请使用appId作为唯一标识 */
  instanceId?: string;

  /** 小产品名称 */
  name?: string;

  /** 小产品id */
  appId?: string;

  /** 小产品首页 */
  homepage?: string;

  /** 应用描述 */
  description?: string;

  /** 应用作者 */
  author?: string[];

  /** 小产品图标图标url */
  icons?: ModelInstalledMicroApp["icons"];

  /** NA程序包当前版本 */
  currentVersion?: string;

  /** locales */
  locales?: any;

  /** 是否独立部署 */
  standaloneMode?: boolean;

  /** 开通白名单。[]空数组表示向全部用户开通, ["defaultUser"]表示未有人开通(仅管理员) */
  readAuthorizers?: string[];

  /** 所属导航菜单及分类菜单 */
  launchpadInfo?: OpenPlatformApi_ListMicroAppResponseItem_launchpadInfo_item[];

  /** 开通状态 */
  activated?: boolean;
}

export type OpenPlatformApi_ListMicroAppResponseBody =
  ResponseListWrapper<OpenPlatformApi_ListMicroAppResponseItem>;

/**
 * @description 微应用列表(全量)
 * @endpoint LIST /api/v1/open_platform/micro_app
 */
export const OpenPlatformApi_listMicroApp = async (
  params: OpenPlatformApi_ListMicroAppRequestParams,
  options?: HttpOptions
): Promise<OpenPlatformApi_ListMicroAppResponseBody> =>
  /**! @contract easyops.api.micro_app_standalone.open_platform.ListMicroApp@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<OpenPlatformApi_ListMicroAppResponseBody>
    >(
      "api/gateway/logic.micro_app_standalone_service/api/v1/open_platform/micro_app",
      { ...options, params }
    )
  ).data;

export interface OpenPlatformApi_ListMicroAppResponseItem_launchpadInfo_item {
  /** 菜单id */
  id?: string;

  /** 菜单名称 */
  name?: string;
}
