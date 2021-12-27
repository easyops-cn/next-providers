import { http, HttpOptions } from "@next-core/brick-http";

export interface MockRuleApi_DeleteProjectMockRuleBatchRequestParams {
  /** providers, 多个用逗号分割 */
  providers?: string;
}

/**
 * @description 批量删除mock规则（provier不再在编排中使用）（build & push前生效）
 * @endpoint DELETE /api/v1/project/:projectId/mock_rule/batch
 */
export const MockRuleApi_deleteProjectMockRuleBatch = (
  projectId: string | number,
  params: MockRuleApi_DeleteProjectMockRuleBatchRequestParams,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.mock_rule.DeleteProjectMockRuleBatch@1.0.0 */ http.delete<void>(
    `api/gateway/next_builder.mock_rule.DeleteProjectMockRuleBatch/api/v1/project/${projectId}/mock_rule/batch`,
    { ...options, params }
  );
