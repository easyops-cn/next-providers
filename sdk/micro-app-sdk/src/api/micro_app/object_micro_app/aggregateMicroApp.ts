import { http, HttpOptions } from "@next-core/brick-http";
import { ModelObjectMicroApp } from "../../../model/micro_app";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ObjectMicroAppApi_AggregateMicroAppRequestBody {
  /** 查询条件 */
  query?: ObjectMicroAppApi_AggregateMicroAppRequestBody_query;
}

export interface ObjectMicroAppApi_AggregateMicroAppResponseBody {
  /** 数据列表 */
  list: ObjectMicroAppApi_AggregateMicroAppResponseBody_list_item[];
}

/**
 * @description 根据模型ID聚合小产品
 * @endpoint POST /api/micro_app/v1/object_micro_app/aggregate
 */
export const ObjectMicroAppApi_aggregateMicroApp = async (
  data: ObjectMicroAppApi_AggregateMicroAppRequestBody,
  options?: HttpOptions
): Promise<ObjectMicroAppApi_AggregateMicroAppResponseBody> =>
  /**! @contract easyops.api.micro_app.object_micro_app.AggregateMicroApp@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<ObjectMicroAppApi_AggregateMicroAppResponseBody>
    >(
      "api/gateway/micro_app.object_micro_app.AggregateMicroApp/api/micro_app/v1/object_micro_app/aggregate",
      data,
      options
    )
  ).data;

export interface ObjectMicroAppApi_AggregateMicroAppRequestBody_query {
  /** 按objectId列表查询 */
  objectId?: string[];
}

export interface ObjectMicroAppApi_AggregateMicroAppResponseBody_list_item {
  /** 模型ID */
  objectId?: string;

  /** 关联小产品列表 */
  microAppList?: Partial<ModelObjectMicroApp>[];
}
