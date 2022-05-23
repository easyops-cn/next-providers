/** 契约调试相关信息 */
export interface ModelDebugContract {
  /** method */
  method: string;

  /** uri example */
  uri: string;

  /** headers */
  headers: Record<string, any>;

  /** file */
  file: File[];

  /** 契约调试数据 */
  data: string;

  /** 服务名字 */
  serviceName: string;
}
