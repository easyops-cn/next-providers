import { http, HttpOptions } from "@next-core/brick-http";
import { ModelCmdbObject, ModelObjectBasicInfo } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

/** 模型信息 */
export interface UpdateV2RequestBody {
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

  /** 编辑权限白名单 */
  updateAuthorizers?: string[];

  /** 删除权限白名单 */
  deleteAuthorizers?: string[];

  /** 当为 true 时，将会忽略生成变更记录 */
  notifyDenied?: boolean;

  /** 当为 true 时，将会忽略该模型的实例权限点校验 */
  permissionDenied?: boolean;

  /** 当为 true 时，不纳入全文搜索 */
  wordIndexDenied?: boolean;

  /** 模型所属小产品，有值则会在界面隐藏该模型 */
  system?: string;
}

export type UpdateV2ResponseBody = Partial<ModelCmdbObject>;

/**
 * @description 更新模型
 * @endpoint PUT /v2/object/:objectId
 */
export const updateV2 = async (
  objectId: string | number,
  data: UpdateV2RequestBody,
  options?: HttpOptions
): Promise<UpdateV2ResponseBody> =>
  (
    await http.put<ResponseBodyWrapper<UpdateV2ResponseBody>>(
      `api/gateway/cmdb.cmdb_object.UpdateV2/v2/object/${objectId}`,
      data,
      options
    )
  ).data;
