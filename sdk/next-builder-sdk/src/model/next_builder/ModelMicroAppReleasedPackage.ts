/** MicroApp发布包 */
export interface ModelMicroAppReleasedPackage {
  /** 小产品id */
  appId: string;

  /** 版本 */
  version: string;

  /** 版本描述 */
  description: string;

  /** 打包状态 */
  packageStatus: string;

  /** 创建用户 */
  commitUser: string;

  /** 创建时间 */
  ctime: string;
}
