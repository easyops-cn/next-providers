import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 删除api接口
 * @endpoint DELETE /api/v1/contract/interface/:instanceId
 */
export const ContractCenterApi_deleteApiContract = (
  instanceId: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.contract_center.DeleteApiContract@1.0.0 */ http.delete<void>(
    `api/gateway/next_builder.contract_center.DeleteApiContract/api/v1/contract/interface/${instanceId}`,
    options
  );
