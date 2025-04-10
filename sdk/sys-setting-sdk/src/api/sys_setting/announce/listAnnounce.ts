import { http, HttpOptions } from "@next-core/brick-http";
import { ModelSysAnnounce } from "../../../model/sys_setting";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper";

export interface AnnounceApi_ListAnnounceRequestParams {
  /** 页码 */
  page?: number;

  /** 每页数据量 */
  pageSize?: number;

  /** 模糊搜索标题 */
  q?: string;

  /** 状态(publish-已发布 unPublish-未发布 全部-"") */
  status?: string;

  /** 类别 */
  category?: string;

  /** 开始时间 */
  from?: string;

  /** 结束时间 */
  to?: string;
}

export type AnnounceApi_ListAnnounceResponseItem = Partial<ModelSysAnnounce>;

export type AnnounceApi_ListAnnounceResponseBody =
  ResponseListWrapper<AnnounceApi_ListAnnounceResponseItem>;

/**
 * @description 查找通知公告列表
 * @endpoint LIST /api/sys_setting/v1/announce
 */
export const AnnounceApi_listAnnounce = async (
  params: AnnounceApi_ListAnnounceRequestParams,
  options?: HttpOptions
): Promise<AnnounceApi_ListAnnounceResponseBody> =>
  /**! @contract easyops.api.sys_setting.announce.ListAnnounce@1.0.1 */ (
    await http.get<ResponseBodyWrapper<AnnounceApi_ListAnnounceResponseBody>>(
      "api/gateway/logic.sys_setting/api/sys_setting/v1/announce",
      { ...options, params }
    )
  ).data;
