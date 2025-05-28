/** 资源包部署记录(包括安装和升级) */
export interface ModelResourcePackageDeployRecord {
  /** columnDb _raw_id */
  id: string;

  /** 任务id */
  jobId: string;

  /** 资源包名称 */
  packageName: string;

  /** 旧版本号 */
  oldVersion: string;

  /** 当前版本号 */
  curVersion: string;

  /** 类型: 安装/升级 */
  deployType: "install" | "upgrade";

  /** 变更记录(yaml_list格式), 只记录oldVersion和curVersion之间的changeLog */
  changeLog: string;

  /** 安装/升级状态 */
  status: "running" | "failed" | "success" | "unknown" | "wait";

  /** 资源部署详情 */
  deployDetail: string;

  /** 安装/升级开始时间 */
  startTime: string;

  /** 安装/升级结束时间 */
  finishTime: string;

  /** 操作人 */
  creator: string;
}
