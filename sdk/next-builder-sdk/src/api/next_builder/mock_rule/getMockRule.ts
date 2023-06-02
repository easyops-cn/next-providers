import { http, HttpOptions } from "@next-core/brick-http";
import { ModelMockRule } from "../../../model/next_builder";
import { ResponseBodyWrapper } from "../../../wrapper";

export type MockRuleApi_GetMockRuleResponseBody = Partial<ModelMockRule> &
  MockRuleApi_GetMockRuleResponseBody_2;

/**
 * @description 获取mock规则
 * @endpoint GET /api/v1/mock_rule/:ruleId
 */
export const MockRuleApi_getMockRule = async (
  ruleId: string | number,
  options?: HttpOptions
): Promise<MockRuleApi_GetMockRuleResponseBody> =>
  /**! @contract easyops.api.next_builder.mock_rule.GetMockRule@1.0.0 */ (
    await http.get<ResponseBodyWrapper<MockRuleApi_GetMockRuleResponseBody>>(
      `api/gateway/next_builder.mock_rule.GetMockRule/api/v1/mock_rule/${ruleId}`,
      options
    )
  ).data;

export interface MockRuleApi_GetMockRuleResponseBody_2 {
  /** mock规则实例Id */
  instanceId?: string;
}
