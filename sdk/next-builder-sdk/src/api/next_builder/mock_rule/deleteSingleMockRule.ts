import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 删除单个mock规则
 * @endpoint DELETE /api/v1/mock_rule/:ruleId
 */
export const MockRuleApi_deleteSingleMockRule = (
  ruleId: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.mock_rule.DeleteSingleMockRule@1.0.0 */ http.delete<void>(
    `api/gateway/next_builder.mock_rule.DeleteSingleMockRule/api/v1/mock_rule/${ruleId}`,
    options
  );
