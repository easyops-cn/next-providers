import { http, HttpOptions } from "@next-core/brick-http";

export interface MockRuleApi_EnableOrDisableMockRuleRequestBody {
  /** provider */
  provider?: string;

  /** 启用/禁用mock规则 */
  isEnable?: boolean;
}

/**
 * @description 启用或者禁用mock规则
 * @endpoint POST /api/v1/project/:projectInstanceId/enable_or_disable_mock_rule
 */
export const MockRuleApi_enableOrDisableMockRule = (
  projectInstanceId: string | number,
  data: MockRuleApi_EnableOrDisableMockRuleRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.mock_rule.EnableOrDisableMockRule@1.0.0 */ http.post<void>(
    `api/gateway/next_builder.mock_rule.EnableOrDisableMockRule/api/v1/project/${projectInstanceId}/enable_or_disable_mock_rule`,
    data,
    options
  );
