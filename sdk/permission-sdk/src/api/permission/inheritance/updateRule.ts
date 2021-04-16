import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInheritRule } from "../../../model/permission";
import { ResponseBodyWrapper } from "../../../wrapper";

export type InheritanceApi_UpdateRuleRequestBody = Partial<ModelInheritRule> &
  ModelInheritRule_partial_2;

export interface InheritanceApi_UpdateRuleResponseBody {
  /** 规则id */
  instanceId?: string;
}

/**
 * @description 编辑规则
 * @endpoint PUT /api/v1/inherit/rule/:instanceId
 */
export const InheritanceApi_updateRule = async (
  instanceId: string | number,
  data: InheritanceApi_UpdateRuleRequestBody,
  options?: HttpOptions
): Promise<InheritanceApi_UpdateRuleResponseBody> =>
  /**! @contract easyops.api.permission.inheritance.UpdateRule */ (
    await http.put<ResponseBodyWrapper<InheritanceApi_UpdateRuleResponseBody>>(
      `api/gateway/permission.inheritance.UpdateRule/api/v1/inherit/rule/${instanceId}`,
      data,
      options
    )
  ).data;

export interface ModelInheritRule_partial_2 {
  /** 规则id */
  instanceId: string;

  /** 规则名称 */
  name: string;

  /** 规则路径 */
  path: ModelInheritRule["path"];

  /** 触发变更的模型字段 */
  sourceField: string;
}
