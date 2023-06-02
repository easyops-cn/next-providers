import { http, HttpOptions } from "@next-core/brick-http";
import { ModelMockRule } from "../../../model/next_builder";
import { ResponseBodyWrapper } from "../../../wrapper";

export type MockRuleApi_CreateMockRuleRequestBody = Partial<ModelMockRule> &
  ModelMockRule_partial;

export interface MockRuleApi_CreateMockRuleResponseBody {
  /** mock规则创建的instanceId */
  instanceId?: string;
}

/**
 * @description 新建mock规则
 * @endpoint POST /api/v1/mock_rule
 */
export const MockRuleApi_createMockRule = async (
  data: MockRuleApi_CreateMockRuleRequestBody,
  options?: HttpOptions
): Promise<MockRuleApi_CreateMockRuleResponseBody> =>
  /**! @contract easyops.api.next_builder.mock_rule.CreateMockRule@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<MockRuleApi_CreateMockRuleResponseBody>
    >(
      "api/gateway/next_builder.mock_rule.CreateMockRule/api/v1/mock_rule",
      data,
      options
    )
  ).data;

export interface ModelMockRule_partial {
  /** mock规则名称 */
  name: string;
}
