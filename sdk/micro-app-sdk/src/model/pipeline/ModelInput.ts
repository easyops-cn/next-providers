/** 输入 */
export interface ModelInput {
  /** 变量名 */
  name: string;

  /** 变量值，type为enum时，使用英文逗号拼接多个枚举值 */
  value: string;

  /** 变量类型 */
  type: "int" | "string" | "secret" | "enum";

  /** 枚举值列表 */
  enum_values: string[];
}
