/** 编排函数信息 */
export interface ModelFlowBuilderFunction {
  /** instanceId */
  instanceId: string;

  /** id */
  id: string;

  /** name */
  name: string;

  /** version */
  version: string;

  /** language */
  language: "golang" | "java" | "js" | "python" | "rust" | "c" | "c++";

  /** type */
  type: "http" | "grpc";

  /** description */
  description: string;

  /** input */
  input: string;

  /** output */
  output: string;

  /** 函数配置 */
  settings: ModelFlowBuilderFunction_settings;
}

export interface ModelFlowBuilderFunction_settings {
  /** 配置名称 */
  name?: string;

  /** 配置值类型 */
  type?: "int" | "string";

  /** 配置描述 */
  description?: string;
}
