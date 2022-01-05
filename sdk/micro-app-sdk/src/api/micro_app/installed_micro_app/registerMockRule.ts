import { http, HttpOptions } from "@next-core/brick-http";

export interface InstalledMicroAppApi_RegisterMockRuleRequestBody {
  /** instanceId */
  instanceId?: string;

  /** 元数据信息 */
  meta?: Record<string, any>;
}

/**
 * @description 注册mock规则
 * @endpoint POST /api/micro_app/v1/register_mock_rule
 */
export const InstalledMicroAppApi_registerMockRule = (
  data: InstalledMicroAppApi_RegisterMockRuleRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.micro_app.installed_micro_app.RegisterMockRule@1.0.0 */ http.post<void>(
    "api/gateway/micro_app.installed_micro_app.RegisterMockRule/api/micro_app/v1/register_mock_rule",
    data,
    options
  );
