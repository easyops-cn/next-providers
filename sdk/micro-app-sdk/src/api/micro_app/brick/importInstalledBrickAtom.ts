import { http, HttpOptions } from "@next-core/brick-http";

export interface BrickApi_ImportInstalledBrickAtomRequestBody {
  /** 包名 */
  packageName: string;

  /** 相关数据 */
  data: BrickApi_ImportInstalledBrickAtomRequestBody_data;
}

/**
 * @description 导入原子构件
 * @endpoint POST /api/v1/brick/atom/import
 */
export const BrickApi_importInstalledBrickAtom = (
  data: BrickApi_ImportInstalledBrickAtomRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.micro_app.brick.ImportInstalledBrickAtom@1.0.0 */ http.post<void>(
    "api/gateway/micro_app.brick.ImportInstalledBrickAtom/api/v1/brick/atom/import",
    data,
    options
  );

export interface BrickApi_ImportInstalledBrickAtomRequestBody_data {
  /** stories.json的内容 获取组件对应的文档数据 */
  stories?: Record<string, any>[];

  /** bricks.json的内容 获取所有组件id */
  bricks?: Record<string, any>;
}
