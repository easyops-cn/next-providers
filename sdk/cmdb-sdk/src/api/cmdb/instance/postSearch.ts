import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface PostSearchRequestBody {
  /** e.g.: { name: { $like: '%q%' } }, { $or: [{ name: { $like: '%q%' }}] } */
  query?: Record<string, any>;

  /** e.g.: { instanceId: true, name: true, owner.name: true}， *代表所有普通属性， 注意：建议都指定fields，按需拉取字段，不然有可能返回数据量太大而导致接口慢系统不稳定 */
  fields?: Record<string, any>;

  /** 当为 true 时，只搜索与我相关实例 */
  only_my_instance?: boolean;

  /** 对于关联的实例数据是否只获取 relation_view 中指定的属性， 这个字段为 true 时， 会覆盖 fields 字段中指定的二级字段设置 */
  only_relation_view?: boolean;

  /** 页码 */
  page?: number;

  /** 页大小 */
  page_size?: number;

  /** 按字段排序， 留空默认按照实例ID降序排序(1表示升序， -1表示降序) e.g.: { instanceId: 1 } */
  sort?: Record<string, any>;

  /** 按照权限过滤(通用实例都有 read， update， delete 权限控制， 主机实例在通用实例权限基础上有额外的 operate 权限， 应用实例在通用实例权限基础上有额外的 developClusterOperate， testClusterOperate， prereleaseClusterOperate， productionClusterOperate 权限) e.g.: [ "operate", "update" ] */
  permission?: string[];

  /** 限制fields所带出的关系的数量， 0为不限制，全局配置 */
  relation_limit?: number;

  /** 单独指定关系的limit与sort */
  limitations?: PostSearchRequestBody_limitations_item[];
}

export interface PostSearchResponseBody {
  /** instance list */
  list?: Record<string, any>[];

  /** 实例总数 */
  total?: number;

  /** 页码 */
  page?: number;

  /** 页大小 */
  page_size?: number;
}

/**
 * @description 搜索实例
 * @endpoint POST /object/:objectId/instance/_search
 */
export const postSearch = async (
  objectId: string | number,
  data: PostSearchRequestBody,
  options?: HttpOptions
): Promise<PostSearchResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.PostSearch */ (
    await http.post<ResponseBodyWrapper<PostSearchResponseBody>>(
      `api/gateway/cmdb.instance.PostSearch/object/${objectId}/instance/_search`,
      data,
      options
    )
  ).data;

export interface PostSearchRequestBody_limitations_item {
  /** 关系id， 支持多级关系， 如owner， owner.app */
  field?: string;

  /** 关系数量限制， 0为不限制， 优先级高于relation_limit */
  limit?: number;

  /** 关系排序 */
  sort?: PostSearchRequestBody_limitations_item_sort_item[];
}

export interface PostSearchRequestBody_limitations_item_sort_item {
  /** 属性id */
  key?: string;

  /** 1或-1， 1为升序， -1位降序 */
  order?: number;
}
