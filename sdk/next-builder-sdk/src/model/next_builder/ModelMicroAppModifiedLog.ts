/** MicroApp修改日志 */
export interface ModelMicroAppModifiedLog {
  /** projectId */
  projectId: string;

  /** 版本 */
  version: string;

  /** 修改次数 */
  modifiedTimes: number;

  /** modifiedUser */
  modifiedUser: string;

  /** 最后修改时间 */
  lastModifiedTime: string;
}
