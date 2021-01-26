import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ListArchiveInstanceRequestParams {
  /** 页码 */
  page?: number;

  /** 页大小 */
  page_size?: number;

  /** 筛选#showKey对应的字段 */
  key_word?: string;
}

export interface ListArchiveInstanceResponseBody {
  /** instance list */
  list: Record<string, any>[];

  /** 实例总数 */
  total: number;

  /** 页码 */
  page: number;

  /** 页大小 */
  page_size: number;
}

/**
 * @description 归档实例分页列表查询
 * @endpoint GET /object/:object_id/instance_archive
 */
export const listArchiveInstance = async (
  object_id: string | number,
  params: ListArchiveInstanceRequestParams,
  options?: HttpOptions
): Promise<ListArchiveInstanceResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<ListArchiveInstanceResponseBody>>(
      `api/gateway/cmdb.instance_archive.ListArchiveInstance/object/${object_id}/instance_archive`,
      { ...options, params }
    )
  ).data;
