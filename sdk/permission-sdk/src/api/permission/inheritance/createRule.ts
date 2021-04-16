import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInheritRule } from "../../../model/permission";
import { ResponseBodyWrapper } from "../../../wrapper";

export type InheritanceApi_CreateRuleRequestBody = Partial<ModelInheritRule> &
  ModelInheritRule_partial;

export interface InheritanceApi_CreateRuleResponseBody {
  /** 规则id */
  instanceId?: string;
}

/**
 * @description 创建规则
 * @endpoint POST /api/v1/inherit/rule
 */
export const InheritanceApi_createRule = async (
  data: InheritanceApi_CreateRuleRequestBody,
  options?: HttpOptions
): Promise<InheritanceApi_CreateRuleResponseBody> =>
  /**! @contract easyops.api.permission.inheritance.CreateRule */ (
    await http.post<ResponseBodyWrapper<InheritanceApi_CreateRuleResponseBody>>(
      "api/gateway/permission.inheritance.CreateRule/api/v1/inherit/rule",
      data,
      options
    )
  ).data;

export interface ModelInheritRule_partial {
  /** 规则名称 */
  name: string;

  /** 规则路径 */
  path: ModelInheritRule["path"];

  /** 触发变更的模型字段 */
  sourceField: string;
}
