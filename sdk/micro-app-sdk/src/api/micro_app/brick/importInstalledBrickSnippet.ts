import { http, HttpOptions } from "@next-core/brick-http";

export interface BrickApi_ImportInstalledBrickSnippetRequestBody {
  /** 包名 */
  packageName: string;

  /** snippets.json的内容 获取编排片段数据 */
  snippets: Record<string, any>;
}

/**
 * @description 导入编排片段
 * @endpoint POST /api/v1/brick/snippet/import
 */
export const BrickApi_importInstalledBrickSnippet = (
  data: BrickApi_ImportInstalledBrickSnippetRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.micro_app.brick.ImportInstalledBrickSnippet@1.0.0 */ http.post<void>(
    "api/gateway/micro_app.brick.ImportInstalledBrickSnippet/api/v1/brick/snippet/import",
    data,
    options
  );
