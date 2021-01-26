/** 小产品版本记录 */
export interface ModelMicroAppVersionLog {
  /** cmdb唯一标识, 业务逻辑请使用appId作为唯一标识 */
  instanceId: string;

  /** 小产品包的org */
  packageOrg: number;

  /** 小产品包ID */
  packageId: string;

  /** 升级版本号 */
  distVersionNo: string;

  /** 变更结果 */
  changeResult: boolean;

  /** 原版本号 */
  srcVersionNo: string;
}
