/** 小产品文档 */
export interface ModelMicroAppDocumentTreeNode {
  /** 实例Id */
  instanceId: string;

  /** 文档Id，全局唯一 */
  documentId: string;

  /** 作者 */
  author: string;

  /** 文档标题 */
  name: string;

  /** 关联小产品 id */
  relatedMicroAppId: string;

  /** 关联路由别名数组 */
  relatedRouteAliases: string[];

  /** 文档顺序 */
  sort: number;

  /** 创建时间 */
  ctime: string;

  /** 修改时间 */
  mtime: string;

  /** 文档状态 */
  status: "editing" | "released";

  /** 下级文档 */
  children: Partial<ModelMicroAppDocumentTreeNode>[];

  /** 上级文档 */
  parent: Partial<ModelMicroAppDocumentTreeNode>;

  /** 文档唯一值，与MicroAppDocument.documentId一致 */
  key: string;

  /** 文档标题，与MicroAppDocument.Name一致 */
  title: string;
}
