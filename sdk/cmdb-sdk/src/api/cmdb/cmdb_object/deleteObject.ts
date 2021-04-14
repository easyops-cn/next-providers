import { http, HttpOptions } from "@next-core/brick-http";
import { ModelCmdbObject } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export type DeleteObjectResponseBody = Partial<ModelCmdbObject>;

/**
 * @description 删除模型
 * @endpoint DELETE /object/:objectId
 */
export const deleteObject = async (
  objectId: string | number,
  options?: HttpOptions
): Promise<DeleteObjectResponseBody> =>
  /**! @contract easyops.api.cmdb.cmdb_object.DeleteObject */ (
    await http.delete<ResponseBodyWrapper<DeleteObjectResponseBody>>(
      `api/gateway/cmdb.cmdb_object.DeleteObject/object/${objectId}`,
      options
    )
  ).data;
