/** 后端节点 */
export interface ModelBackendNode {
  /** 实例ID */
  instanceId: string;

  /** ip/host */
  ip: string;

  /** port */
  port: number;

  /** 协议 */
  scheme: "http" | "https";

  /** 是否启用 */
  enabled: boolean;

  /** 权重 */
  weight: number;
}
