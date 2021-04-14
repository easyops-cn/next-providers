import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInheritRule } from "../../../model/permission";
import { ResponseBodyWrapper } from "../../../wrapper";

export type CreateRuleRequestBody = Partial<ModelInheritRule> &
  ModelInheritRule_partial;

export interface CreateRuleResponseBody {
  /** 规则id */
  instanceId?: string;
}

/**
 * @description 创建规则
 * @endpoint POST /api/v1/inherit/rule
 */
export const createRule = async (
  data: CreateRuleRequestBody,
  options?: HttpOptions
): Promise<CreateRuleResponseBody> =>
  /**! @contract easyops.api.permission.inheritance.CreateRule */ (
    await http.post<ResponseBodyWrapper<CreateRuleResponseBody>>(
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
