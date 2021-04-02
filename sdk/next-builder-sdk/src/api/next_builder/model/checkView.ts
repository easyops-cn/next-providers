import { http, HttpOptions } from "@next-core/brick-http";

export interface CheckViewRequestBody {
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
export const checkView = (
  data: CheckViewRequestBody,
  options?: HttpOptions
): Promise<void> =>
  http.post<void>(
    "api/gateway/next_builder.model.CheckView/api/v1/view/check",
    data,
    options
  );