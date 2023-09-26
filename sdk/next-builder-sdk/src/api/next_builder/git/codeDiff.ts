import { http, HttpOptions } from "@next-core/brick-http";
import { ModelGitDiffTree } from "../../../model/next_builder";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface GitApi_CodeDiffRequestBody {
  /** diff ref from */
  refFrom: string;

  /** diff ref to */
  refTo: string;
}

export interface GitApi_CodeDiffResponseBody {
  /** git diff差异信息 */
  diffs?: GitApi_CodeDiffResponseBody_diffs_item[];
}

/**
 * @description Code Diff
 * @endpoint POST /api/v1/next-builder/diff/:appId
 */
export const GitApi_codeDiff = async (
  appId: string | number,
  data: GitApi_CodeDiffRequestBody,
  options?: HttpOptions
): Promise<GitApi_CodeDiffResponseBody> =>
  /**! @contract easyops.api.next_builder.git.CodeDiff@1.0.0 */ (
    await http.post<ResponseBodyWrapper<GitApi_CodeDiffResponseBody>>(
      `api/gateway/next_builder.git.CodeDiff/api/v1/next-builder/diff/${appId}`,
      data,
      options
    )
  ).data;

export interface GitApi_CodeDiffResponseBody_diffs_item {
  /** 类别：routes/functions/i18n.... */
  category?: string;

  /** 数据变更信息 */
  root?: Partial<ModelGitDiffTree>[];
}
