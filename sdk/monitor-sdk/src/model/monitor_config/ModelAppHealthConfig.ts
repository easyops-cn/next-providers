import { ModelAppHealthConfigVariable, ModelAppHealthConfigLayer } from ".";

/** 应用评分配置 */
export interface ModelAppHealthConfig {
  /** 应用id */
  app_id: string;

  /** 配置id */
  id: string;

  /** 版本id */
  version_id: string;

  /** 创建者 */
  creator: string;

  /** 创建时间 */
  ctime: number;

  /** 修改者 */
  modifier: string;

  /** 修改时间 */
  mtime: number;

  /** org */
  org: number;

  /** 应用变量 */
  variables: Partial<ModelAppHealthConfigVariable>[];

  /** 应用分层 */
  layers: Partial<ModelAppHealthConfigLayer>[];
}
