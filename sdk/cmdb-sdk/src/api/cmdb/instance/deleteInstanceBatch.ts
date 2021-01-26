import { http, HttpOptions } from "@next-core/brick-http";
import { ModelFailInstance } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface DeleteInstanceBatchRequestParams {
  /** 实例ID, 用分号隔开, e.g. 5ab9f10a6ef88;5abb0dca9971d */
  instanceIds: string;
}

export interface DeleteInstanceBatchResponseBody {
  /** 删除失败的实例列表 */
  deleteFailedInstances?: Partial<ModelFailInstance>[];
}

/**
 * @description 批量删除实例
 * @endpoint DELETE /object/:objectId/instance/_batch
 */
export const deleteInstanceBatch = async (
  objectId: string | number,
  params: DeleteInstanceBatchRequestParams,
  options?: HttpOptions
): Promise<DeleteInstanceBatchResponseBody> =>
  (
    await http.delete<ResponseBodyWrapper<DeleteInstanceBatchResponseBody>>(
      `api/gateway/cmdb.instance.DeleteInstanceBatch/object/${objectId}/instance/_batch`,
      { ...options, params }
    )
  ).data;
