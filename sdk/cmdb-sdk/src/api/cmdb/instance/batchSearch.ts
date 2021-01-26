import { http, HttpOptions } from "@next-core/brick-http";

export interface BatchSearchRequestBody {
  /** body */
  data?: BatchSearchRequestBody_data_item[];
}

export interface BatchSearchResponseBody {
  /** 返回码 */
  code: number;

  /** 错误信息 */
  error: string;

  /** 返回消息 */
  message: string;

  /** 实例总数 */
  data: BatchSearchResponseBody_data_item[];
}

/**
 * @description 多模型批量搜索实例
 * @endpoint POST /batch/object/instance/_search
 */
export const batchSearch = (
  data: BatchSearchRequestBody,
  options?: HttpOptions
): Promise<BatchSearchResponseBody> =>
  http.post<BatchSearchResponseBody>(
    "api/gateway/cmdb.instance.BatchSearch/batch/object/instance/_search",
    data,
    options
  );

export interface BatchSearchRequestBody_data_item {
  /** 模型对象ID */
  object_id?: string;

  /** 搜索条件 */
  search?: BatchSearchRequestBody_data_item_search;
}

export interface BatchSearchResponseBody_data_item {
  /** instance list */
  list?: Record<string, any>[];

  /** 实例总数 */
  total?: number;

  /** 页码 */
  page?: number;

  /** 页大小 */
  page_size?: number;
}

export interface BatchSearchRequestBody_data_item_search {
  /** e.g.: { name: { $like: '%q%' } }, { $or: [{ name: { $like: '%q%' }}] } */
  query?: Record<string, any>;

  /** e.g.: { instanceId: true, name: true } */
  fields?: Record<string, any>;

  /** 当为 true 时，只搜索与我相关实例 */
  only_my_instance?: boolean;

  /** 对于关联的实例数据是否只获取 relation_view 中指定的属性, 这个字段为 true 时, 会覆盖 fields 字段中指定的二级字段设置 */
  only_relation_view?: boolean;

  /** 页码 */
  page?: number;

  /** 页大小 */
  page_size?: number;

  /** 按字段排序, 留空默认按照实例ID降序排序(1表示升序, -1表示降序) e.g.: { instanceId: 1 } */
  sort?: Record<string, any>;

  /** 按照权限过滤(通用实例都有 read, update, delete 权限控制, 主机实例在通用实例权限基础上有额外的 operate 权限, 应用实例在通用实例权限基础上有额外的 developClusterOperate, testClusterOperate, prereleaseClusterOperate, productionClusterOperate 权限) e.g.: [ "operate", "update" ] */
  permission?: string[];
}
