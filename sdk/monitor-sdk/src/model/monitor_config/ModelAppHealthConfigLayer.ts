import { ModelAppHealthConfigMetrics } from ".";

/** 应用评分配置分层 */
export interface ModelAppHealthConfigLayer {
  /** 分层id */
  id: string;

  /** 分层名称 */
  name: string;

  /** 权重 */
  weight: number;

  /** 采集项 */
  metrics: Partial<ModelAppHealthConfigMetrics>[];
}
