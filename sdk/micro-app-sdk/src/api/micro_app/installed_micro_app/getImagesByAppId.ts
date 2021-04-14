import { http, HttpOptions } from "@next-core/brick-http";
import { ModelImage } from "../../../model/micro_app";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface GetImagesByAppIdRequestBody {
  /** 小产品id */
  appId?: string;

  /** 图片 */
  images?: Partial<ModelImage>[];
}

export interface GetImagesByAppIdResponseBody {
  /** 图片 */
  images?: Partial<ModelImage>[];
}

/**
 * @description 获取app图片库图片
 * @endpoint POST /api/v1/micro-app/images
 */
export const getImagesByAppId = async (
  data: GetImagesByAppIdRequestBody,
  options?: HttpOptions
): Promise<GetImagesByAppIdResponseBody> =>
  /**! @contract easyops.api.micro_app.installed_micro_app.GetImagesByAppId */ (
    await http.post<ResponseBodyWrapper<GetImagesByAppIdResponseBody>>(
      "api/gateway/micro_app.installed_micro_app.GetImagesByAppId/api/v1/micro-app/images",
      data,
      options
    )
  ).data;
