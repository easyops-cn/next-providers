import { http, HttpOptions } from "@next-core/brick-http";

export interface MockRuleApi_DeleteMockRuleBatchRequestBody {
  /** mock规则实例Id */
  instanceIds?: string[];
}

/**
 * @description 批量删除mock规则
 * @endpoint POST /api/v1/mock_rule/batch_deletion
 */
export const MockRuleApi_deleteMockRuleBatch = (
  data: MockRuleApi_DeleteMockRuleBatchRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.mock_rule.DeleteMockRuleBatch@1.0.0 */ http.post<void>(
    "api/gateway/next_builder.mock_rule.DeleteMockRuleBatch/api/v1/mock_rule/batch_deletion",
    data,
    options
  );
