import { ModelObjectView } from ".";

/** 模型 */
export interface ModelObjectBasicInfo {
  /** 名称 */
  name: string;

  /** objectId */
  objectId: string;

  /** 备注 */
  memo: string;

  /** 视图设置 */
  view: Partial<ModelObjectView>;

  /** true 内置模型，false 用户自定义模型 */
  protected: boolean;

  /** 当为 true 时，不纳入全文搜索 */
  wordIndexDenied: boolean;

  /** 分类 */
  category: string;

  /** 模型图标 */
  icon: string;

  /** 模型所属小产品，有值则会在界面隐藏该模型 */
  system: string;

  /** 创建时间 */
  ctime: string;

  /** 修改时间 */
  mtime: string;

  /** 创建者 */
  creator: string;

  /** 修改者 */
  modifier: string;

  /** 创建时间的时间截 */
  _ts: number;

  /** 模型版本 */
  _version: number;

  /** 访问权限白名单 */
  readAuthorizers: string[];

  /** 编辑权限白名单 */
  updateAuthorizers: string[];

  /** 删除权限白名单 */
  deleteAuthorizers: string[];

  /** 是否是抽象模型(父模型) */
  isAbstract: boolean;

  /** 所属父模型（废弃） */
  parentObjectId: string;

  /** 所属父模型列表 */
  parentObjectIds: string[];

  /** 当为 true 时，将会忽略该模型的实例权限点校验 */
  permissionDenied: boolean;

  /** 当为 true 时，将会忽略生成变更记录 */
  notifyDenied: boolean;
}
