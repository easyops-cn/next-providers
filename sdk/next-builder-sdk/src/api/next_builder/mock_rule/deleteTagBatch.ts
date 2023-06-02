import { http, HttpOptions } from "@next-core/brick-http";

export interface MockRuleApi_DeleteTagBatchRequestBody {
  /** mock规则实例Id */
  ruleIds?: string[];

  /** 规则标签 */
  tag?: string[];
}

/**
 * @description 批量删除标签
 * @endpoint POST /api/v1/mock_rule/batch_tag_deletion
 */
export const MockRuleApi_deleteTagBatch = (
  data: MockRuleApi_DeleteTagBatchRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.mock_rule.DeleteTagBatch@1.0.0 */ http.post<void>(
    "api/gateway/next_builder.mock_rule.DeleteTagBatch/api/v1/mock_rule/batch_tag_deletion",
    data,
    options
  );
