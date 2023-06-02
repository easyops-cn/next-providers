import { http, HttpOptions } from "@next-core/brick-http";

export interface MockRuleApi_AddTagBatchRequestBody {
  /** mock规则实例Id */
  ruleIds?: string[];

  /** 规则标签 */
  tag?: string[];
}

/**
 * @description 批量添加标签
 * @endpoint POST /api/v1/mock_rule/batch_tag_addition
 */
export const MockRuleApi_addTagBatch = (
  data: MockRuleApi_AddTagBatchRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.mock_rule.AddTagBatch@1.0.0 */ http.post<void>(
    "api/gateway/next_builder.mock_rule.AddTagBatch/api/v1/mock_rule/batch_tag_addition",
    data,
    options
  );
