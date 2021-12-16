import { http, HttpOptions } from "@next-core/brick-http";
import { ModelObjectBasicInfo, ModelCmdbObject } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface CmdbObjectApi_CreateRequestBody {
  /** objectId */
  objectId: string;

  /** 名称 */
  name: string;

  /** 模型图标 */
  icon?: string;

  /** 分类 */
  category?: string;

  /** 备注 */
  memo?: string;

  /** 视图设置 */
  view?: ModelObjectBasicInfo["view"];

  /** 是否是抽象模型(父模型) */
  isAbstract?: boolean;

  /** 所属父模型（废弃） */
  parentObjectId?: string;

  /** 所属父模型列表 */
  parentObjectIds?: string[];

  /** 当为 true 时，将会忽略生成变更记录 */
  notifyDenied?: boolean;

  /** 当为 true 时，不纳入全文搜索 */
  wordIndexDenied?: boolean;

  /** 当为 true 时，将会忽略该模型的实例权限点校验 */
  permissionDenied?: boolean;

  /** 模型所属小产品，有值则会在界面隐藏该模型 */
  system?: string;

  /** 访问权限白名单 */
  readAuthorizers?: string[];

  /** 编辑权限白名单 */
  updateAuthorizers?: string[];

  /** 删除权限白名单 */
  deleteAuthorizers?: string[];
}

export type CmdbObjectApi_CreateResponseBody = Partial<ModelCmdbObject>;

/**
 * @description 创建模型
 * @endpoint POST /object
 */
export const CmdbObjectApi_create = async (
  data: CmdbObjectApi_CreateRequestBody,
  options?: HttpOptions
): Promise<CmdbObjectApi_CreateResponseBody> =>
  /**! @contract easyops.api.cmdb.cmdb_object.Create@1.0.0 */ (
    await http.post<ResponseBodyWrapper<CmdbObjectApi_CreateResponseBody>>(
      "api/gateway/cmdb.cmdb_object.Create/object",
      data,
      options
    )
  ).data;
