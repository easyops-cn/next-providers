/** 评论数据 */
export interface ModelCommentData {
  /** ID */
  instanceId: string;

  /** 来源的模型id */
  sourceObjId: string;

  /** 来源的实例id */
  sourceInstId: string;

  /** 评论的内容 */
  content: string;

  /** 创建人 */
  creator: string;

  /** 创建时间 */
  ctime: string;
}
