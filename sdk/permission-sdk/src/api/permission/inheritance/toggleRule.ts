import { http, HttpOptions } from "@next-core/brick-http";

export interface InheritanceApi_ToggleRuleRequestBody {
  /** 是否启用 */
  enable?: boolean;
}

/**
 * @description 启用/禁用继承规则
 * @endpoint PUT /api/v1/inherit/rule/:instanceId/toggle
 */
export const InheritanceApi_toggleRule = (
  instanceId: string | number,
  data: InheritanceApi_ToggleRuleRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.permission.inheritance.ToggleRule */ http.put<void>(
    `api/gateway/permission.inheritance.ToggleRule/api/v1/inherit/rule/${instanceId}/toggle`,
    data,
    options
  );
