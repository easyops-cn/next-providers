import { http, HttpOptions } from "@next-core/brick-http";
import { ModelMockRule } from "../../../model/next_builder";

export type MockRuleApi_UpdateMockRuleRequestBody = Partial<ModelMockRule>;

/**
 * @description 更新mock规则
 * @endpoint PUT /api/v1/mock_rule/:ruleId
 */
export const MockRuleApi_updateMockRule = (
  ruleId: string | number,
  data: MockRuleApi_UpdateMockRuleRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.mock_rule.UpdateMockRule@1.0.0 */ http.put<void>(
    `api/gateway/next_builder.mock_rule.UpdateMockRule/api/v1/mock_rule/${ruleId}`,
    data,
    options
  );
