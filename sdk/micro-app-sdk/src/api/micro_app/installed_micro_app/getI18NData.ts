import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstalledMicroAppApi_GetI18NDataRequestParams {
  /** 微应用的appIds, 多个用逗号分开 */
  appIds: string;
}

/** 微应用的i18n信息 */
export interface InstalledMicroAppApi_GetI18NDataResponseBody {
  /** i18n信息 */
  i18nInfo?: InstalledMicroAppApi_GetI18NDataResponseBody_i18nInfo_item[];
}

/**
 * @description 获取微应用的i18n数据
 * @endpoint GET /api/v1/micro-app/i18n
 */
export const InstalledMicroAppApi_getI18NData = async (
  params: InstalledMicroAppApi_GetI18NDataRequestParams,
  options?: HttpOptions
): Promise<InstalledMicroAppApi_GetI18NDataResponseBody> =>
  /**! @contract easyops.api.micro_app.installed_micro_app.GetI18NData@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<InstalledMicroAppApi_GetI18NDataResponseBody>
    >(
      "api/gateway/micro_app.installed_micro_app.GetI18NData/api/v1/micro-app/i18n",
      { ...options, params }
    )
  ).data;

export interface InstalledMicroAppApi_GetI18NDataResponseBody_i18nInfo_item {
  /** appId */
  appId?: string;

  /** i18n */
  i18n?: InstalledMicroAppApi_GetI18NDataResponseBody_i18nInfo_item_i18n;
}

export interface InstalledMicroAppApi_GetI18NDataResponseBody_i18nInfo_item_i18n {
  /** 中文 */
  zh?: Record<string, any>;

  /** 英文 */
  en?: Record<string, any>;
}
