import { http, HttpOptions } from "@next-core/brick-http";
import { ModelCmdbObject } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export type CmdbObjectApi_DeleteObjectResponseBody = Partial<ModelCmdbObject>;

/**
 * @description 删除模型
 * @endpoint DELETE /object/:objectId
 */
export const CmdbObjectApi_deleteObject = async (
  objectId: string | number,
  options?: HttpOptions
): Promise<CmdbObjectApi_DeleteObjectResponseBody> =>
  /**! @contract easyops.api.cmdb.cmdb_object.DeleteObject */ (
    await http.delete<
      ResponseBodyWrapper<CmdbObjectApi_DeleteObjectResponseBody>
    >(`api/gateway/cmdb.cmdb_object.DeleteObject/object/${objectId}`, options)
  ).data;
