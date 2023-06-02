/** 小产品项目开发环境 */
export interface ModelMicroAppDevelopmentEnv {
  /** open api gateway ip */
  openApiIP: string;

  /** open api gateway port */
  openApiPort: number;

  /** open api access key */
  accessKey: string;

  /** open api secret key */
  secretKey: string;

  /** protocol */
  protocol: "http" | "https";

  /** open api previewIP */
  previewIP: string;
}
