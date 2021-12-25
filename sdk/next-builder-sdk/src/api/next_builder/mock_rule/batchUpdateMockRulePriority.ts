import { http, HttpOptions } from "@next-core/brick-http";

export interface MockRuleApi_BatchUpdateMockRulePriorityRequestBody {
  /** mock规则实例Id */
  instanceIds?: string[];

  /** mock规则优先级， 和instanceIds一一对应 */
  priority?: number[];
}

/**
 * @description 批量更新mock规则优先级
 * @endpoint PUT /api/v1/mock_rule/batch_priority_update
 */
export const MockRuleApi_batchUpdateMockRulePriority = (
  data: MockRuleApi_BatchUpdateMockRulePriorityRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.mock_rule.BatchUpdateMockRulePriority@1.0.0 */ http.put<void>(
    "api/gateway/next_builder.mock_rule.BatchUpdateMockRulePriority/api/v1/mock_rule/batch_priority_update",
    data,
    options
  );
