/** 大模型记忆 */
export interface ModelLlmMemory {
  /** 会话id */
  conversationId: string;

  /** 记忆的key */
  memKey: string;

  /** 记忆的描述信息 */
  description: string;

  /** 记忆的值 */
  memValue: string;

  /** 记忆的修改时间，例如：2024-09-04 15:21:20 */
  mtime: string;

  /** 记忆只用于保存，不会给到大模型 */
  onlySave: boolean;
}
