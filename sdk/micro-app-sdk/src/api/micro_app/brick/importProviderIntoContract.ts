import { http, HttpOptions } from "@next-core/brick-http";

export interface BrickApi_ImportProviderIntoContractRequestBody {
  /** 包名 */
  packageName: string;

  /** provider包里的契约数据 */
  data: BrickApi_ImportProviderIntoContractRequestBody_data;
}

/**
 * @description 将provider导入接口契约
 * @endpoint POST /api/v1/brick/provider/import_into_contract
 */
export const BrickApi_importProviderIntoContract = (
  data: BrickApi_ImportProviderIntoContractRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.micro_app.brick.ImportProviderIntoContract@1.0.0 */ http.post<void>(
    "api/gateway/micro_app.brick.ImportProviderIntoContract/api/v1/brick/provider/import_into_contract",
    data,
    options
  );

export interface BrickApi_ImportProviderIntoContractRequestBody_data {
  /** contract.json的内容 */
  contractInfo?: Record<string, any>;
}
