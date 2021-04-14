import { http, HttpOptions } from "@next-core/brick-http";
import { ModelLogSearchData } from "../../../model/log_search";

export interface LogSearchRequestBody {
  /** 日志路径 */
  log_file_name: string;

  /** 是否允许模糊匹配日志路径 */
  enabled_file_pattern?: boolean;

  /** 搜索关键字。多个用空格分隔，and逻辑 */
  keywords?: string;

  /** 最大返回行数。如需修改最大查询行数, 以逗号分隔, 如 10,1000 表示一次最多查询1000行, 返回匹配到关键字的10行 */
  max_return_lines?: string;

  /** 关键字前n行 */
  before_lines?: number;

  /** 关键字后n行 */
  after_lines?: number;

  /** 搜索主机IP列表 */
  agents: string[];
}

export interface LogSearchResponseBody {
  /** code */
  code?: number;

  /** 返回码字符串表示 */
  message?: string;

  /** data */
  data?: Partial<ModelLogSearchData>[];
}

/**
 * @description 日志搜索
 * @endpoint POST /api/v1/log_search/search
 */
export const logSearch = (
  data: LogSearchRequestBody,
  options?: HttpOptions
): Promise<LogSearchResponseBody> =>
  /**! @contract easyops.api.monitor.log_search.LogSearch */ http.post<LogSearchResponseBody>(
    "api/gateway/monitor.log_search.LogSearch/api/v1/log_search/search",
    data,
    options
  );
