/** olap接口measure定义 */
export interface ModelMeasure {
  /** 聚合计算后，指标的名称 */
  name: string;

  /** 计算规则 */
  function: ModelMeasure_function;
}

export interface ModelMeasure_function {
  /** 聚合方法 */
  expression?:
    | "avg"
    | "count"
    | "sum"
    | "min"
    | "max"
    | "topK"
    | "divide"
    | "increase"
    | "rate"
    | "irate"
    | "quantile";

  /** 参数列表，可以填children的name 如 sum -> args["power"]
                              topK -> args["power", 10]
 */
  args?: any[];

  /** 是否去掉重复值, expression为divide时不可用 */
  distinct?: boolean;

  /** 依赖的子集合函数
   */
  children?: Partial<ModelMeasure>[];
}
