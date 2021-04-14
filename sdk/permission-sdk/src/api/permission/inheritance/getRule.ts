import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInheritRule } from "../../../model/permission";
import { ResponseBodyWrapper } from "../../../wrapper";

export type GetRuleResponseBody = Partial<ModelInheritRule>;

/**
 * @description 获取规则
 * @endpoint GET /api/v1/inherit/rule/:instanceId
 */
export const getRule = async (
  instanceId: string | number,
  options?: HttpOptions
): Promise<GetRuleResponseBody> =>
  /**! @contract easyops.api.permission.inheritance.GetRule */ (
    await http.get<ResponseBodyWrapper<GetRuleResponseBody>>(
      `api/gateway/permission.inheritance.GetRule/api/v1/inherit/rule/${instanceId}`,
      options
    )
  ).data;
