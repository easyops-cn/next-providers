import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface CommentApi_CreateCommentRequestBody {
  /** 来源的模型id */
  sourceObjId: string;

  /** 来源的实例id */
  sourceInstId: string;

  /** 评论的内容 */
  content: string;
}

export interface CommentApi_CreateCommentResponseBody {
  /** ID */
  instanceId?: string;
}

/**
 * @description 创建评论
 * @endpoint POST /api/sys_setting/v1/comment
 */
export const CommentApi_createComment = async (
  data: CommentApi_CreateCommentRequestBody,
  options?: HttpOptions
): Promise<CommentApi_CreateCommentResponseBody> =>
  /**! @contract easyops.api.sys_setting.comment.CreateComment@1.0.1 */ (
    await http.post<ResponseBodyWrapper<CommentApi_CreateCommentResponseBody>>(
      "api/gateway/logic.sys_setting/api/sys_setting/v1/comment",
      data,
      options
    )
  ).data;
