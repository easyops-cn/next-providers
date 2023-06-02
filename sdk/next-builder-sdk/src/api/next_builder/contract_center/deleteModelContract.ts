import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 删除model契约接口
 * @endpoint DELETE /api/v1/contract/model/:instanceId
 */
export const ContractCenterApi_deleteModelContract = (
  instanceId: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.contract_center.DeleteModelContract@1.0.0 */ http.delete<void>(
    `api/gateway/next_builder.contract_center.DeleteModelContract/api/v1/contract/model/${instanceId}`,
    options
  );
