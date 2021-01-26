import { http, HttpOptions } from "@next-core/brick-http";

export interface BindObjectMicroAppRequestBody {
  /** 小产品id */
  appId?: string;
}

/**
 * @description 绑定Object与MicroApp关系
 * @endpoint POST /api/micro_app/v1/object_micro_app/bind
 */
export const bindObjectMicroApp = (
  data: BindObjectMicroAppRequestBody,
  options?: HttpOptions
): Promise<void> =>
  http.post<void>(
    "api/gateway/micro_app.object_micro_app.BindObjectMicroApp/api/micro_app/v1/object_micro_app/bind",
    data,
    options
  );
