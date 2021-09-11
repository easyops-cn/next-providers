import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseListWrapper } from "../../../wrapper";

export interface MenuApi_ListLegacyModuleRequestParams {
  /** 用户使用的平台(例如cmdb,ops), CheckLogin 会返回此字段 */
  loginRegion?: string;
}

export interface MenuApi_ListLegacyModuleResponseItem {
  /** 模块 remark 列表, 只可能是以下枚举
 持续部署
 运维自动化
 CMDB
 工具平台
 调度平台
 定时任务
 系统配置
 仪表盘
 部署编排
 Agent管理
 */
  menus?: string[];
}

export type MenuApi_ListLegacyModuleResponseBody =
  ResponseListWrapper<MenuApi_ListLegacyModuleResponseItem>;

/**
 * @description 获取模块权限
 * @endpoint LIST /api/v1/permission/module/legacy
 */
export const MenuApi_listLegacyModule = (
  params: MenuApi_ListLegacyModuleRequestParams,
  options?: HttpOptions
): Promise<MenuApi_ListLegacyModuleResponseBody> =>
  /**! @contract easyops.api.permission.menu.ListLegacyModule */ http.get<MenuApi_ListLegacyModuleResponseBody>(
    "api/gateway/permission.menu.ListLegacyModule/api/v1/permission/module/legacy",
    { ...options, params }
  );
