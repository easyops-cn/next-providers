/** 列模型 */
export interface ModelColumnObject {
  /** base */
  base: ModelColumnObject_base;
}

export interface ModelColumnObject_base {
  /** 列模型id, 格式objectId@namespace */
  id?: string;

  /** ttl占位符；bool；与ttl属性不能同时存在 */
  ttl_null?: any;

  /** 列模型数据过期时间，单位小时；整型；与ttl_null不能同时存在 */
  ttl?: any;

  /** parquet配置 */
  parquet_config?: ModelColumnObject_base_parquet_config;

  /** 可修改的临时表的配置；TmpTableConfig类型；默认为空，不会启动临时表机制 */
  tmp_table_config?: ModelColumnObject_base_tmp_table_config;

  /** 列模型的列 */
  columns?: ModelColumnObject_base_columns_item[];
}

export interface ModelColumnObject_base_parquet_config {
  /** 存储parquet文件的大小，单位字节 */
  parquet_max_file_size?: string;

  /** 存储parquet文件的分组行数，多少行为一组 */
  row_group?: string;
}

export interface ModelColumnObject_base_tmp_table_config {
  /** 是否启用临时表机制 */
  enabled?: boolean;

  /** flush_ttl占位符；bool类型；与flush_ttl属性不能同时存在 */
  flush_ttl_null?: any;

  /** 临时表转静态表的最晚时间；整型，单位小时；flush_ttl_null属性不能同时存在 */
  flush_ttl?: any;

  /** 静态化检查的属性id */
  checked_field_id?: string;

  /** 静态化检查的属性值列表；字符串数组 */
  checked_field_value?: string[];
}

export interface ModelColumnObject_base_columns_item {
  /** 列id；字符串 */
  id?: string;

  /** 列名；字符串 */
  name?: string;

  /** 列数据类型； */
  data_type?: Record<string, any>;

  /** 是否必填；bool类型,默认都为false */
  required?: boolean;

  /** 是否启动内存索引查询加速；bool类型； */
  enable_mem_index?: boolean;

  /** 写parquet文件时的自定义配置 */
  parquet_config?: ModelColumnObject_base_columns_item_parquet_config;
}

export interface ModelColumnObject_base_columns_item_parquet_config {
  /** 是否启用字典；字符串类型，填写bool类型值； */
  dictionary_enabled?: string;

  /** 是否启用统计信息；字符串类型，填写bool类型值； */
  statistics_enabled?: string;

  /** 最大存储统计信息；字符串类型，填写bool类型值； */
  max_statistics_size?: string;

  /** 是否启用bloom过滤器；字符串类型，填写bool类型值 */
  bloom_filter_enabled?: string;

  /** 启动bloom过滤器时的fpp；字符串类型，填写double类型值 */
  bloom_filter_properties_fpp?: string;

  /** 启动bloom过滤器时的ndv；字符串类型，填写uint64类型值 */
  bloom_filter_properties_ndv?: string;
}
