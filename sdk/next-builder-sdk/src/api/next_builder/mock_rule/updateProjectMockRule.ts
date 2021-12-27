import { http, HttpOptions } from "@next-core/brick-http";

export interface MockRuleApi_UpdateProjectMockRuleRequestBody {
  /** mock规则的instanceIds */
  rulesInstanceIds?: string[];

  /** 契约url */
  url?: string;

  /** provider */
  provider?: string;
}

/**
 * @description 更新项目mock规则(需Build&Push后生效)
 * @endpoint POST /api/v1/project/:projectInstanceId/update_mock_rule
 */
export const MockRuleApi_updateProjectMockRule = (
  projectInstanceId: string | number,
  data: MockRuleApi_UpdateProjectMockRuleRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.mock_rule.UpdateProjectMockRule@1.0.0 */ http.post<void>(
    `api/gateway/next_builder.mock_rule.UpdateProjectMockRule/api/v1/project/${projectInstanceId}/update_mock_rule`,
    data,
    options
  );
