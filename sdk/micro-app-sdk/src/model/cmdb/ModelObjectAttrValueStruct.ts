/** 模型属性类型 */
export interface ModelObjectAttrValueStruct {
  /** 结构体字段ID */
  id: string;

  /** 结构体字段名称 */
  name: string;

  /** 数据类型 */
  type:
    | "int"
    | "enum"
    | "str"
    | "arr"
    | "date"
    | "datetime"
    | "ip"
    | "float"
    | "bool"
    | "json";

  /** 仅仅在type是enum时有值，并且是字符串数组 */
  regex: any;

  /** 是否是内置属性: 核心定义的内置属性默认都是核心属性, 核心属性不允许被删除、不允许修改约束 */
  protected: boolean;
}
