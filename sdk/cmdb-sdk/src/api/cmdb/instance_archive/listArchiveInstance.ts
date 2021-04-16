import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceArchiveApi_ListArchiveInstanceRequestParams {
  /** 页码 */
  page?: number;

  /** 页大小 */
  page_size?: number;

  /** 筛选#showKey对应的字段 */
  key_word?: string;
}

export interface InstanceArchiveApi_ListArchiveInstanceResponseBody {
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
export const InstanceArchiveApi_listArchiveInstance = async (
  object_id: string | number,
  params: InstanceArchiveApi_ListArchiveInstanceRequestParams,
  options?: HttpOptions
): Promise<InstanceArchiveApi_ListArchiveInstanceResponseBody> =>
  /**! @contract easyops.api.cmdb.instance_archive.ListArchiveInstance */ (
    await http.get<
      ResponseBodyWrapper<InstanceArchiveApi_ListArchiveInstanceResponseBody>
    >(
      `api/gateway/cmdb.instance_archive.ListArchiveInstance/object/${object_id}/instance_archive`,
      { ...options, params }
    )
  ).data;
