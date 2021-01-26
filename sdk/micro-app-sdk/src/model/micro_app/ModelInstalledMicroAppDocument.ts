/** MicroApp文档 */
export interface ModelInstalledMicroAppDocument {
  /** 实例Id */
  instanceId: string;

  /** 文档Id，全局唯一 */
  documentId: string;

  /** 作者 */
  author: string;

  /** 文档标题 */
  name: string;

  /** 文档内容 */
  content: string;

  /** 关联小产品 id */
  relatedMicroAppId: string;

  /** 关联路由别名数组 */
  relatedRouteAliases: string[];

  /** 文档顺序 */
  sort: number;

  /** 下级文档 */
  children: Partial<ModelInstalledMicroAppDocument>[];

  /** 上级文档 */
  parent: Partial<ModelInstalledMicroAppDocument>;
}
