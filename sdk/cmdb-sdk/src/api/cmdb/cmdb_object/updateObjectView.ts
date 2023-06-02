import { http, HttpOptions } from "@next-core/brick-http";
import { ModelObjectBasicInfo, ModelCmdbObject } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

/** 视图设置 */
export interface CmdbObjectApi_UpdateObjectViewRequestBody {
  /** 视图设置 */
  view?: ModelObjectBasicInfo["view"];
}

export type CmdbObjectApi_UpdateObjectViewResponseBody =
  Partial<ModelCmdbObject>;

/**
 * @description 更新模型视图
 * @endpoint PUT /object_view/:objectId
 */
export const CmdbObjectApi_updateObjectView = async (
  objectId: string | number,
  data: CmdbObjectApi_UpdateObjectViewRequestBody,
  options?: HttpOptions
): Promise<CmdbObjectApi_UpdateObjectViewResponseBody> =>
  /**! @contract easyops.api.cmdb.cmdb_object.UpdateObjectView@2.0.0 */ (
    await http.put<
      ResponseBodyWrapper<CmdbObjectApi_UpdateObjectViewResponseBody>
    >(
      `api/gateway/cmdb.cmdb_object.UpdateObjectView/object_view/${objectId}`,
      data,
      options
    )
  ).data;
