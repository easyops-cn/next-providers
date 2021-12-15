import { http, HttpOptions } from "@next-core/brick-http";

export interface StoryboardApi_CloneBricksRequestBody {
  /** 源构件id */
  sourceBrickId: string;

  /** 新的父构件id */
  newParentBrickId: string;

  /** 新的应用id */
  newAppId: string;

  /** 是否排除sourceBrick，默认false */
  exclude?: boolean;

  /** 是否导入linked sourceBrick关联的template */
  linked?: boolean;
}

/**
 * @description 拷贝构件 (拷贝构件)
 * @endpoint POST /api/v1/nextBuilder/clone
 */
export const StoryboardApi_cloneBricks = (
  data: StoryboardApi_CloneBricksRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.storyboard.CloneBricks@1.0.0 */ http.post<void>(
    "api/gateway/next_builder.storyboard.CloneBricks/api/v1/nextBuilder/clone",
    data,
    options
  );
