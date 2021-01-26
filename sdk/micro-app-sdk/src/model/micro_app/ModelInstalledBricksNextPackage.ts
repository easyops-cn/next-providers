/** 小产品 */
export interface ModelInstalledBricksNextPackage {
  /** 包名称 */
  name: string;

  /** 包的配置内容 */
  packageJson: any;

  /** 包类型 */
  packageType: "NB" | "NT";

  /** storiesJson */
  storiesJson: any;
}
