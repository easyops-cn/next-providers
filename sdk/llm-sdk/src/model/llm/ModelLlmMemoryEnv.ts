/** 大模型记忆环境 */
export interface ModelLlmMemoryEnv {
  /** 唯一key，创建时不需要传 */
  _row_id: string;

  /** 环境名称 */
  name: string;

  /** 会话id */
  conversationId: string;

  /** 备注信息 */
  remark: string;
}
