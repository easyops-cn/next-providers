import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface DeleteRuleResponseBody {
  /** 规则id */
  instanceId?: string;
}

/**
 * @description 删除规则
 * @endpoint DELETE /api/v1/inherit/rule/:instanceId
 */
export const deleteRule = async (
  instanceId: string | number,
  options?: HttpOptions
): Promise<DeleteRuleResponseBody> =>
  (
    await http.delete<ResponseBodyWrapper<DeleteRuleResponseBody>>(
      `api/gateway/permission.inheritance.DeleteRule/api/v1/inherit/rule/${instanceId}`,
      options
    )
  ).data;
