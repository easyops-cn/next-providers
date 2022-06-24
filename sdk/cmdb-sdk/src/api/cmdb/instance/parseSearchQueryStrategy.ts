import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceApi_ParseSearchQueryStrategyRequestBody {
  /** 策略实例ID */
  instanceId?: string;

  /** 策略内容(包含查询条件和返回的字段,供前端使用，后台逻辑暂时不做校验) */
  query?: Record<string, any>;

  /** 显示字段 */
  fields?: string[];
}

export interface InstanceApi_ParseSearchQueryStrategyResponseBody {
  /** fields */
  fields?: string[];

  /** cmdb 查询query */
  query?: Record<string, any>;

  /** sort */
  sort?: InstanceApi_ParseSearchQueryStrategyResponseBody_sort_item[];
}

/**
 * @description 通过策略ID或者查询策略获取CMDB查询条件
 * @endpoint POST /convert/object/:objectId/parse_search_query/strategy
 */
export const InstanceApi_parseSearchQueryStrategy = async (
  objectId: string | number,
  data: InstanceApi_ParseSearchQueryStrategyRequestBody,
  options?: HttpOptions
): Promise<InstanceApi_ParseSearchQueryStrategyResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.ParseSearchQueryStrategy@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<InstanceApi_ParseSearchQueryStrategyResponseBody>
    >(
      `api/gateway/cmdb.instance.ParseSearchQueryStrategy/convert/object/${objectId}/parse_search_query/strategy`,
      data,
      options
    )
  ).data;

export interface InstanceApi_ParseSearchQueryStrategyResponseBody_sort_item {
  /** 属性id */
  key?: string;

  /** 1表示升序， -1表示降序, 2表示自然升序， -2表示自然降序 */
  order?: number;
}
