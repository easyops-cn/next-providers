import { http, HttpOptions } from "@next-core/brick-http";

export interface BuildApi_BatchDeleteImagesRequestBody {
  /** 图片所在项目的instanceId */
  projectInstanceId: string;

  /** 图片名字 */
  imageNames: string[];
}

/**
 * @description 批量删除图片
 * @endpoint POST /api/v1/next_builder/images/batch_delete
 */
export const BuildApi_batchDeleteImages = (
  data: BuildApi_BatchDeleteImagesRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.build.BatchDeleteImages@1.1.0 */ http.post<void>(
    "api/gateway/next_builder.build.BatchDeleteImages/api/v1/next_builder/images/batch_delete",
    data,
    options
  );
