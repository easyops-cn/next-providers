/** 日志搜索返回数据 */
export interface ModelLogSearchData {
  /** code */
  code: number;

  /** 搜索主机的ip */
  ip: string;

  /** 错误提示 */
  msg: string;

  /** 搜索结果 */
  data: ModelLogSearchData_data;
}

export interface ModelLogSearchData_data {
  /** 最大查询行数 */
  max_query_lines?: number;

  /** 最大返回行数 */
  max_return_lines?: number;

  /** 日志返回（可同时搜索多个日志路径，所以这里是个列表） */
  content?: ModelLogSearchData_data_content_item[];
}

export interface ModelLogSearchData_data_content_item {
  /** code */
  code?: number;

  /** 日志路径 */
  file_path?: string;

  /** 日志内容 */
  text?: string;
}
