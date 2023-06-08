import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 删除图片
 * @endpoint DELETE /api/v1/next_builder/images/:imageInstanceId
 */
export const BuildApi_deleteImage = (
  imageInstanceId: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.build.DeleteImage@1.1.0 */ http.delete<void>(
    `api/gateway/next_builder.build.DeleteImage/api/v1/next_builder/images/${imageInstanceId}`,
    options
  );
