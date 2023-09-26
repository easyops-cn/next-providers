/** 程序包版本 */
export interface ModelVersion {
  /** 版本名称 */
  name: string;

  /** 版本Id */
  versionId: string;

  /** 程序包Id */
  packageId: string;

  /** 组织id */
  org: number;

  /** 基础Docker镜像Id */
  baseImageId: string;

  /** 基线版本名 */
  baseVersionName: string;

  /** 创建者 */
  creator: string;

  /** 真实创建者(可以不是平台用户) */
  realUser: string;

  /** 版本创建者(这里使用string类型:github用户名字符最长39位,user_name正则为31位不满足) */
  builder: string;

  /** 版本类型 1 开发, 3 测试, 7 预发布, 15 生产 */
  env_type: 1 | 3 | 7 | 15;

  /** 版本备注 */
  memo: string;

  /** 创建时间 */
  ctime: string;

  /** 修改时间 */
  mtime: string;

  /** 包文件的md5检验值 */
  sign: string;

  /** 关联的svn库版本，已废弃 */
  repoVersion: string;

  /** 包存储源信息,如"{"host":"deployrepo.easyops-only.com","ensName":"logic.deploy.repo.archive"}" */
  source: string;

  /** 包存储服务版本 */
  sourceType: "easyRepoV1" | "easyRepoV2";

  /** 工作区基础版本Id */
  workspaceBaseId: string;

  /** 版本的进程及启停、安装、升级脚本, package.conf.yaml */
  conf: string;

  /** 标记版本, 民生银行专用 */
  releaseType: string;

  /** 部署编码 */
  deployEncoding: "UTF-8" | "UTF-16" | "GBK" | "GB2312" | "GB18030" | "BIG5";
}
