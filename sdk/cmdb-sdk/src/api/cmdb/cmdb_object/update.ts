import { http, HttpOptions } from "@next-core/brick-http";
import { ModelObjectBasicInfo, ModelCmdbObject } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

/** 模型信息 */
export interface CmdbObjectApi_UpdateRequestBody {
  /** 名称 */
  name?: string;

  /** 模型图标 */
  icon?: string;

  /** 分类 */
  category?: string;

  /** 备注 */
  memo?: string;

  /** 视图设置 */
  view?: ModelObjectBasicInfo["view"];

  /** 访问权限白名单 */
  readAuthorizers?: string[];

  /** 编辑权限白名单 */
  updateAuthorizers?: string[];

  /** 删除权限白名单 */
  deleteAuthorizers?: string[];
}

export type CmdbObjectApi_UpdateResponseBody = Partial<ModelCmdbObject>;

/**
 * @description 更新模型
 * @endpoint PUT /object/:objectId
 */
export const CmdbObjectApi_update = async (
  objectId: string | number,
  data: CmdbObjectApi_UpdateRequestBody,
  options?: HttpOptions
): Promise<CmdbObjectApi_UpdateResponseBody> =>
  /**! @contract easyops.api.cmdb.cmdb_object.Update */ (
    await http.put<ResponseBodyWrapper<CmdbObjectApi_UpdateResponseBody>>(
      `api/gateway/cmdb.cmdb_object.Update/object/${objectId}`,
      data,
      options
    )
  ).data;
