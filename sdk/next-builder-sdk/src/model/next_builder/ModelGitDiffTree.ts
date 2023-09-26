/** git变更详情 */
export interface ModelGitDiffTree {
  /** unique id */
  id: string;

  /** 数据变更类型 */
  actions: ModelGitDiffTree_actions_item[];

  /** instanceId对应的数据 */
  dataOfId: string;

  /** 文件变更具体内容 */
  changeDetail: ModelGitDiffTree_changeDetail_item[];

  /** children */
  children: Partial<ModelGitDiffTree>[];
}

export interface ModelGitDiffTree_actions_item {
  /** 数据变更类型 */
  action?: "add" | "modify" | "delete" | "move";

  /** move专用, 用于关系的移动:原root_instanceId */
  originRootInstanceId?: string;

  /** move专用, 用于关系的移动:原root_instanceId */
  curRootInstanceId?: string;
}

export interface ModelGitDiffTree_changeDetail_item {
  /** 文件变更操作 */
  operation?: "insert" | "delete";

  /** 文件变更内容 */
  content?: string;
}
