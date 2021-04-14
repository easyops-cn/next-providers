import { http, HttpOptions } from "@next-core/brick-http";
import { ModelObjectMicroApp } from "../../../model/micro_app";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AggregateMicroAppRequestBody {
  /** 查询条件 */
  query?: AggregateMicroAppRequestBody_query;
}

export interface AggregateMicroAppResponseBody {
  /** 数据列表 */
  list: AggregateMicroAppResponseBody_list_item[];
}

/**
 * @description 根据模型ID聚合小产品
 * @endpoint POST /api/micro_app/v1/object_micro_app/aggregate
 */
export const aggregateMicroApp = async (
  data: AggregateMicroAppRequestBody,
  options?: HttpOptions
): Promise<AggregateMicroAppResponseBody> =>
  /**! @contract easyops.api.micro_app.object_micro_app.AggregateMicroApp */ (
    await http.post<ResponseBodyWrapper<AggregateMicroAppResponseBody>>(
      "api/gateway/micro_app.object_micro_app.AggregateMicroApp/api/micro_app/v1/object_micro_app/aggregate",
      data,
      options
    )
  ).data;

export interface AggregateMicroAppRequestBody_query {
  /** 按objectId列表查询 */
  objectId?: string[];
}

export interface AggregateMicroAppResponseBody_list_item {
  /** 模型ID */
  objectId?: string;

  /** 关联小产品列表 */
  microAppList?: Partial<ModelObjectMicroApp>[];
}
