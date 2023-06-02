import { ModelObjectAttrValueStruct } from ".";

/** 模型属性类型 */
export interface ModelObjectAttrValue {
  /** 数据类型, FK与FKs已废弃 */
  type:
    | "int"
    | "enum"
    | "str"
    | "arr"
    | "date"
    | "datetime"
    | "struct"
    | "structs"
    | "ip"
    | "FK"
    | "FKs"
    | "float"
    | "bool"
    | "json"
    | "enums";

  /** type是enum时是枚举值数组, struct和structs没有regex, 其他的type时是正则表达式 */
  regex: any;

  /** 默认值类型( value: 具体的值, function:可执行函数, auto-increment-id:自增ID, series-number:定长序列号) */
  default_type:
    | "value"
    | "function"
    | "auto-increment-id"
    | "series-number"
    | "";

  /** 默认值 */
  default: any;

  /** 结构体字段定义: 当type 为 struct 和 structs 时候为必填 */
  struct_define: Partial<ModelObjectAttrValueStruct>[];

  /** 字符串模式定义: 多行文本和普通字符串 */
  mode: "" | "multiple-lines" | "default" | "markdown" | "tag" | "url";

  /** 自增ID和流水号的前缀: 当default_type 是series-number和 auto-increment-id时候为必填 */
  prefix: string;

  /** 自增ID和流水号的起始值 */
  start_value: number;

  /** 流水号的固定长度 */
  series_number_length: number;
}
