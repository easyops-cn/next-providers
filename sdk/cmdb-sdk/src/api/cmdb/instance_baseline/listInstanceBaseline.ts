import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceBaselineApi_ListInstanceBaselineRequestParams {
  /** 页码 */
  page?: number;

  /** 页大小 */
  page_size?: number;

  /** 筛选#showKey对应的字段 */
  key_word?: string;
}

export interface InstanceBaselineApi_ListInstanceBaselineResponseBody {
  /** instance base list */
  list: Record<string, any>[];

  /** 实例总数 */
  total: number;

  /** 页码 */
  page: number;

  /** 页大小 */
  page_size: number;
}

/**
 * @description 分页列表查询实例基线
 * @endpoint GET /object/:object_id/instance_baseline
 */
export const InstanceBaselineApi_listInstanceBaseline = async (
  object_id: string | number,
  params: InstanceBaselineApi_ListInstanceBaselineRequestParams,
  options?: HttpOptions
): Promise<InstanceBaselineApi_ListInstanceBaselineResponseBody> =>
  /**! @contract easyops.api.cmdb.instance_baseline.ListInstanceBaseline@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<InstanceBaselineApi_ListInstanceBaselineResponseBody>
    >(
      `api/gateway/cmdb.instance_baseline.ListInstanceBaseline/object/${object_id}/instance_baseline`,
      { ...options, params }
    )
  ).data;
