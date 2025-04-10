import { http, HttpOptions } from "@next-core/brick-http";
import { ModelCommentDataView } from "../../../model/sys_setting";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper";

export interface CommentApi_ListCommentRequestParams {
  /** 来源 */
  sourceId?: string;
}

export type CommentApi_ListCommentResponseItem = Partial<ModelCommentDataView>;

export type CommentApi_ListCommentResponseBody =
  ResponseListWrapper<CommentApi_ListCommentResponseItem>;

/**
 * @description 查找评论列表
 * @endpoint LIST /api/sys_setting/v1/comment
 */
export const CommentApi_listComment = async (
  params: CommentApi_ListCommentRequestParams,
  options?: HttpOptions
): Promise<CommentApi_ListCommentResponseBody> =>
  /**! @contract easyops.api.sys_setting.comment.ListComment@1.0.1 */ (
    await http.get<ResponseBodyWrapper<CommentApi_ListCommentResponseBody>>(
      "api/gateway/logic.sys_setting/api/sys_setting/v1/comment",
      { ...options, params }
    )
  ).data;
