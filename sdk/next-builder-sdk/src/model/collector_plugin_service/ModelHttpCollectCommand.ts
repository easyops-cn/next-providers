/** http采集指令 */
export interface ModelHttpCollectCommand {
  /** http/https协议 */
  protocol: "http" | "https";

  /** ip */
  ip: string;

  /** port */
  port: string;

  /** uri */
  uri: string;
}
