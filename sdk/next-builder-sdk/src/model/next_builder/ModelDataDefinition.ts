/** 工作流数据定义 */
export interface ModelDataDefinition {
  /** 字段ID */
  id: string;

  /** 字段名称 */
  name: string;

  /** 'true' 必填字段，'false' 非必填字段 */
  required: "true" | "false";

  /** 字段值类型，不同类型有不同字段 */
  value: ModelDataDefinition_value;

  /** valueInfo */
  valueInfo: ModelDataDefinition_valueInfo;
}

export interface ModelDataDefinition_value {
  /** 数据类型 */
  type?:
    | "int"
    | "str"
    | "arr"
    | "date"
    | "datetime"
    | "struct"
    | "structs"
    | "float"
    | "bool"
    | "json"
    | "enum"
    | "enums";

  /** 时间格式 */
  timeFormat?: string;

  /** type是enum/enums时是枚举值数组, struct和structs没有regex, 其他的type时是正则表达式 */
  regex?: any;

  /** 默认值 */
  default?: any;

  /** 字符串模式定义: 多行文本和普通字符串 */
  mode?: "multiple-lines" | "default";

  /** 结构体字段定义: 当type 为 struct 和 structs 时候为必填 */
  structDefine?: ModelDataDefinition_value_structDefine_item[];
}

export interface ModelDataDefinition_valueInfo {
  /** type */
  type?: "const" | "expr";

  /** value */
  value?: any;
}

export interface ModelDataDefinition_value_structDefine_item {
  /** 结构体字段ID */
  id?: string;

  /** 结构体字段名称 */
  name?: string;

  /** 数据类型 */
  type?:
    | "int"
    | "enum"
    | "enums"
    | "str"
    | "arr"
    | "date"
    | "datetime"
    | "float"
    | "bool"
    | "json";

  /** 仅仅在type是enum/enums时有值，并且是字符串数组 */
  regex?: any;

  /** 时间格式 */
  timeFormat?: string;
}
