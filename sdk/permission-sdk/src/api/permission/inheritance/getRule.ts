import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInheritRule } from "../../../model/permission";
import { ResponseBodyWrapper } from "../../../wrapper";

export type InheritanceApi_GetRuleResponseBody = Partial<ModelInheritRule>;

/**
 * @description 获取规则
 * @endpoint GET /api/v1/inherit/rule/:instanceId
 */
export const InheritanceApi_getRule = async (
  instanceId: string | number,
  options?: HttpOptions
): Promise<InheritanceApi_GetRuleResponseBody> =>
  /**! @contract easyops.api.permission.inheritance.GetRule@1.1.0 */ (
    await http.get<ResponseBodyWrapper<InheritanceApi_GetRuleResponseBody>>(
      `api/gateway/permission.inheritance.GetRule/api/v1/inherit/rule/${instanceId}`,
      options
    )
  ).data;
