import { http, HttpOptions } from "@next-core/brick-http";

export interface ModelApi_CheckViewRequestBody {
  /** 命名空间instanceId */
  namespace: string;

  /** 领域id */
  id: string;

  /** 领域name */
  name: string;

  /** 领域instanceId */
  instanceId?: string;
}

/**
 * @description 校验领域模型
 * @endpoint POST /api/v1/view/check
 */
export const ModelApi_checkView = (
  data: ModelApi_CheckViewRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.model.CheckView@1.0.0 */ http.post<void>(
    "api/gateway/next_builder.model.CheckView/api/v1/view/check",
    data,
    options
  );
