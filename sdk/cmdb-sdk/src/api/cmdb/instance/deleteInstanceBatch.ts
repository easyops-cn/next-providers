import { http, HttpOptions } from "@next-core/brick-http";
import { ModelFailInstance } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceApi_DeleteInstanceBatchRequestParams {
  /** 实例ID, 用分号隔开, e.g. 5ab9f10a6ef88;5abb0dca9971d */
  instanceIds: string;
}

export interface InstanceApi_DeleteInstanceBatchResponseBody {
  /** 删除失败的实例列表 */
  deleteFailedInstances?: Partial<ModelFailInstance>[];
}

/**
 * @description 批量删除实例
 * @endpoint DELETE /object/:objectId/instance/_batch
 */
export const InstanceApi_deleteInstanceBatch = async (
  objectId: string | number,
  params: InstanceApi_DeleteInstanceBatchRequestParams,
  options?: HttpOptions
): Promise<InstanceApi_DeleteInstanceBatchResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.DeleteInstanceBatch */ (
    await http.delete<
      ResponseBodyWrapper<InstanceApi_DeleteInstanceBatchResponseBody>
    >(
      `api/gateway/cmdb.instance.DeleteInstanceBatch/object/${objectId}/instance/_batch`,
      { ...options, params }
    )
  ).data;
