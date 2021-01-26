import { http, HttpOptions } from "@next-core/brick-http";
import { ModelCmdbObject, ModelObjectBasicInfo } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface CreateRequestBody {
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

  /** 所属父模型 */
  parentObjectId?: string;

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

export type CreateResponseBody = Partial<ModelCmdbObject>;

/**
 * @description 创建模型
 * @endpoint POST /object
 */
export const create = async (
  data: CreateRequestBody,
  options?: HttpOptions
): Promise<CreateResponseBody> =>
  (
    await http.post<ResponseBodyWrapper<CreateResponseBody>>(
      "api/gateway/cmdb.cmdb_object.Create/object",
      data,
      options
    )
  ).data;
