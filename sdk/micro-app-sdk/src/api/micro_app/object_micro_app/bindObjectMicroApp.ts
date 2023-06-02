import { http, HttpOptions } from "@next-core/brick-http";

export interface ObjectMicroAppApi_BindObjectMicroAppRequestBody {
  /** 小产品id */
  appId?: string;
}

/**
 * @description 绑定Object与MicroApp关系
 * @endpoint POST /api/micro_app/v1/object_micro_app/bind
 */
export const ObjectMicroAppApi_bindObjectMicroApp = (
  data: ObjectMicroAppApi_BindObjectMicroAppRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.micro_app.object_micro_app.BindObjectMicroApp@1.0.0 */ http.post<void>(
    "api/gateway/micro_app.object_micro_app.BindObjectMicroApp/api/micro_app/v1/object_micro_app/bind",
    data,
    options
  );
