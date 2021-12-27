import { http, HttpOptions } from "@next-core/brick-http";
import { ModelMockRule } from "../../../model/next_builder";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface MockRuleApi_GetMockRuleByProviderRequestParams {
  /** providerName */
  providerName?: string;
}

export interface MockRuleApi_GetMockRuleByProviderResponseBody {
  /** mockData */
  mockData?: (Partial<ModelMockRule> &
    MockRuleApi_GetMockRuleByProviderResponseBody_mockData_item)[];
}

/**
 * @description 根据provider获取mock规则
 * @endpoint GET /api/v1/mock_rule_by_provider
 */
export const MockRuleApi_getMockRuleByProvider = async (
  params: MockRuleApi_GetMockRuleByProviderRequestParams,
  options?: HttpOptions
): Promise<MockRuleApi_GetMockRuleByProviderResponseBody> =>
  /**! @contract easyops.api.next_builder.mock_rule.GetMockRuleByProvider@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<MockRuleApi_GetMockRuleByProviderResponseBody>
    >(
      "api/gateway/next_builder.mock_rule.GetMockRuleByProvider/api/v1/mock_rule_by_provider",
      { ...options, params }
    )
  ).data;

export interface MockRuleApi_GetMockRuleByProviderResponseBody_mockData_item {
  /** mock规则实例Id */
  instanceId?: string;
}
