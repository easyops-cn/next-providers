/** 评论数据 */
export interface ModelCommentDataView {
  /** ID */
  instanceId: string;

  /** 来源的模型id */
  sourceObjId: string;

  /** 来源的实例id */
  sourceInstId: string;

  /** 评论的内容 */
  content: string;

  /** 用户 */
  user: ModelCommentDataView_user;

  /** 创建时间 */
  ctime: string;
}

export interface ModelCommentDataView_user {
  /** 用户名 */
  name?: string;

  /** id */
  instanceId?: string;

  /** 用户头像 */
  icon?: string;
}
