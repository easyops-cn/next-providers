import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ReportApi_RestoreMenusRequestBody {
  /** 需要恢复出厂菜单的menuId */
  menuId?: string;
}

export interface ReportApi_RestoreMenusResponseBody {
  /** 是否成功 */
  success?: boolean;
}

/**
 * @description 恢复出厂菜单
 * @endpoint POST /api/v1/report/restore_menus
 */
export const ReportApi_restoreMenus = async (
  data: ReportApi_RestoreMenusRequestBody,
  options?: HttpOptions
): Promise<ReportApi_RestoreMenusResponseBody> =>
  /**! @contract easyops.api.micro_app_standalone.report.RestoreMenus@1.0.0 */ (
    await http.post<ResponseBodyWrapper<ReportApi_RestoreMenusResponseBody>>(
      "api/gateway/logic.micro_app_standalone_service/api/v1/report/restore_menus",
      data,
      options
    )
  ).data;
