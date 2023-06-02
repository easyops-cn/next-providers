import { http, HttpOptions } from "@next-core/brick-http";
import { ModelMockRule } from "../../../model/next_builder";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface MockRuleApi_GetDefaultMockRuleRequestParams {
  /** 关联契约instanceId */
  contractInstanceId: string;
}

export type MockRuleApi_GetDefaultMockRuleResponseBody = Partial<ModelMockRule>;

/**
 * @description 获取默认的mock规则
 * @endpoint GET /api/v1/default_mock_rule
 */
export const MockRuleApi_getDefaultMockRule = async (
  params: MockRuleApi_GetDefaultMockRuleRequestParams,
  options?: HttpOptions
): Promise<MockRuleApi_GetDefaultMockRuleResponseBody> =>
  /**! @contract easyops.api.next_builder.mock_rule.GetDefaultMockRule@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<MockRuleApi_GetDefaultMockRuleResponseBody>
    >(
      "api/gateway/next_builder.mock_rule.GetDefaultMockRule/api/v1/default_mock_rule",
      { ...options, params }
    )
  ).data;
