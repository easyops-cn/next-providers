/** 契约调试相关信息 */
export interface ModelDebugContract {
  /** method */
  method: string;

  /** uri example */
  uri: string;

  /** headers */
  headers: Record<string, any>;

  /** file */
  files: File[];

  /** 契约调试数据 */
  data: string;

  /** 服务名字 */
  serviceName: string;

  /** 上传的文件名字和转发接口中fileName的的对应 */
  fileNameMapping: Record<string, any>;
}
