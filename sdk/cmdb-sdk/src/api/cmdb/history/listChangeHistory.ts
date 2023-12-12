import { http, HttpOptions } from "@next-core/brick-http";
import { ModelCmdbChangeHistory } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface HistoryApi_ListChangeHistoryRequestParams {
  /** 查询凭证（Token）。取值为上一次调用该接口返回的 nextToken 参数值，初次调用接口时无需设置该参数。 */
  nextToken?: string;

  /** 分页查询时每页的最大条目数。默认10，最大3000。 */
  maxResults?: number;

  /** 页码。从1开始。推荐使用 nextToken 与 maxResults 完成分页查询操作。 */
  page?: number;

  /** 每页条数。默认100，最大3000。推荐使用 nextToken 与 maxResults 完成分页查询操作。 */
  pageSize?: number;

  /** 系统名称 */
  system?: string;

  /** 目标名称(工具名/流程名/对象名/实例名) */
  target_name?: string;

  /** 目标分组 */
  target_category?: string;

  /** 目标名称(多个以逗号分隔,且建议只传递target_id) */
  target_id?: string;

  /** 事件id */
  event_id?: string;

  /** 父事件id */
  parent_event_id?: string;

  /** 操作人 */
  operator?: string;

  /** 事件名称 */
  event?: string;

  /** 排除事件名称 */
  exclude_event?: string;

  /** 排除的系统名称 */
  exclude_system?: string;

  /** 事件备注 */
  memo?: string;

  /** 是否查询子事件（true查询子事件，false不查询子时间，默认false) */
  with_children?: boolean;

  /** 通知相关人（包含operator和notifier) */
  user?: string;

  /** 开始时间。格式为 `2006-01-02 15:04:05` */
  start_time?: string;

  /** 截止时间。格式为 `2006-01-02 15:04:05` */
  end_time?: string;

  /** 是否不需要查询总数 */
  without_total?: boolean;

  /** topic */
  topic?: string;

  /** query */
  query?: string;

  /** ctime_order 默认 desc */
  ctime_order?: string;

  /** skip */
  skip?: number;

  /** limit */
  limit?: number;

  /** 模型属性或者关系的边id */
  field_id?: string;
}

export interface HistoryApi_ListChangeHistoryResponseBody {
  /** OperationLog 列表 */
  list?: Partial<ModelCmdbChangeHistory>[];

  /** 本次调用返回的查询凭证（Token）。当该返回值为空时，表示该页为末页，不再有后续页。 */
  nextToken?: string;

  /** 页码。使用 maxResults 和 nextToken 参数进行分页查询时，返回的 page 参数值无意义。 */
  page?: number;

  /** 页大小。使用 maxResults 和 nextToken 参数进行分页查询时，返回的 pageSize 参数值无意义。 */
  pageSize?: number;

  /** 总条数。使用 maxResults 和 nextToken 参数进行分页查询时，返回的 total 参数值无意义。 */
  total?: number;
}

/**
 * @description 查询变更历史
 * @endpoint GET /change/history
 */
export const HistoryApi_listChangeHistory = async (
  params: HistoryApi_ListChangeHistoryRequestParams,
  options?: HttpOptions
): Promise<HistoryApi_ListChangeHistoryResponseBody> =>
  /**! @contract easyops.api.cmdb.history.ListChangeHistory@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<HistoryApi_ListChangeHistoryResponseBody>
    >("api/gateway/cmdb.history.ListChangeHistory/change/history", {
      ...options,
      params,
    })
  ).data;
