/** 第三方应用 */
export interface ModelSsoClient {
  /** 应用id */
  clientId: string;

  /** 可信任的密钥凭证 */
  clientSecret: string;

  /** 应用名称 */
  clientName: string;

  /** 重定向地址 */
  redirectUri: string;

  /** 应用负责人 */
  clientUser: string;

  /** 应用负责人的邮箱 */
  email: string;

  /** 应用负责人的手机号 */
  phone: string;

  /** 应用描述 */
  describe: string;

  /** 应用图片 */
  clientImage: ModelSsoClient_clientImage;
}

export interface ModelSsoClient_clientImage {
  /** 名称 */
  name?: string;

  /** 链接 */
  url?: string;
}
