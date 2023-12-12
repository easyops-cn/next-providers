import { http, HttpOptions } from "@next-core/brick-http";
import { ModelCmdbMeasure } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceApi_OlapV2RequestBody {
  /** instance_filter */
  instance_filter?: Record<string, any>;

  /** metrics_filter */
  metrics_filter?: Record<string, any>;

  /** 指定返回字段 */
  fields?: string[];

  /** 按字段排序 */
  sort?: InstanceApi_OlapV2RequestBody_sort_item[];

  /** 页码 */
  page?: number;

  /** 页大小 */
  page_size?: number;

  /** time_range */
  time_range?: InstanceApi_OlapV2RequestBody_time_range;

  /** measures */
  measures?: Partial<ModelCmdbMeasure>[];

  /** group_fields */
  group_fields?: string[];

  /** 指标数据查询 */
  with_empty_data?: boolean;

  /** having */
  having?: Record<string, any>;

  /** minimum_step */
  minimum_step?: string;

  /** 汇聚时相对于UTC偏移量，单位ms。比如需要按照本地时间偏移：8 * 3600 * 1000（加8小时），如果需要按照start_time偏移，可以设置为start_time */
  resolution_offset?: number;
}

export interface InstanceApi_OlapV2ResponseBody {
  /** 实例总数 */
  total?: number;

  /** 页码 */
  page?: number;

  /** 页大小 */
  page_size?: number;

  /** resolution */
  resolution?: number;

  /** records */
  records?: InstanceApi_OlapV2ResponseBody_records_item[];
}

/**
 * @description olap_v2接口 (查询指标并校验权限)
 * @endpoint POST /v2/object/:objectId/olap
 */
export const InstanceApi_olapV2 = async (
  objectId: string | number,
  data: InstanceApi_OlapV2RequestBody,
  options?: HttpOptions
): Promise<InstanceApi_OlapV2ResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.OlapV2@1.1.0 */ (
    await http.post<ResponseBodyWrapper<InstanceApi_OlapV2ResponseBody>>(
      `api/gateway/cmdb.instance.OlapV2/v2/object/${objectId}/olap`,
      data,
      options
    )
  ).data;

export interface InstanceApi_OlapV2RequestBody_sort_item {
  /** 属性id */
  key?: string;

  /** order */
  order?: number;
}

export interface InstanceApi_OlapV2RequestBody_time_range {
  /** start_time */
  start_time?: number;

  /** end_time */
  end_time?: number;
}

export interface InstanceApi_OlapV2ResponseBody_records_item {
  /** data */
  data?: Record<string, any>;
}
