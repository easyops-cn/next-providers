import { http, HttpOptions } from "@next-core/brick-http";
import { ModelMockRule } from "../../../model/next_builder";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface MockRuleApi_GetMockRuleByContractNameRequestParams {
  /** contractName */
  contractName?: string;
}

export interface MockRuleApi_GetMockRuleByContractNameResponseBody {
  /** mockData */
  mockData?: (Partial<ModelMockRule> &
    MockRuleApi_GetMockRuleByContractNameResponseBody_mockData_item)[];
}

/**
 * @description 根据契约名获取mock规则
 * @endpoint GET /api/v1/mock_rule_by_contract_name
 */
export const MockRuleApi_getMockRuleByContractName = async (
  params: MockRuleApi_GetMockRuleByContractNameRequestParams,
  options?: HttpOptions
): Promise<MockRuleApi_GetMockRuleByContractNameResponseBody> =>
  /**! @contract easyops.api.next_builder.mock_rule.GetMockRuleByContractName@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<MockRuleApi_GetMockRuleByContractNameResponseBody>
    >(
      "api/gateway/next_builder.mock_rule.GetMockRuleByContractName/api/v1/mock_rule_by_contract_name",
      { ...options, params }
    )
  ).data;

export interface MockRuleApi_GetMockRuleByContractNameResponseBody_mockData_item {
  /** mock规则实例Id */
  instanceId?: string;
}
