import { http, HttpOptions } from "@next-core/brick-http";

export interface BrickApi_ImportInstalledBrickAtomRequestBody {
  /** 包名 */
  packageName: string;

  /** 包版本 */
  packageVersion?: string;

  /** 相关数据 */
  data: BrickApi_ImportInstalledBrickAtomRequestBody_data;

  /** NB压缩包 */
  file?: File;
}

/**
 * @description 导入原子构件
 * @endpoint POST /api/v1/brick/atom/import
 */
export const BrickApi_importInstalledBrickAtom = (
  data: BrickApi_ImportInstalledBrickAtomRequestBody,
  options?: HttpOptions
): Promise<void> => {
  /**! @contract easyops.api.micro_app.brick.ImportInstalledBrickAtom@1.0.0 */ const _formData =
    new FormData();
  for (const [key, value] of Object.entries(data)) {
    if (Array.isArray(value)) {
      const k = `${key}[]`;
      value.forEach((v) => {
        _formData.append(k, v);
      });
    } else {
      _formData.append(key, value);
    }
  }
  return http.post<void>(
    "api/gateway/micro_app.brick.ImportInstalledBrickAtom/api/v1/brick/atom/import",
    _formData,
    options
  );
};

export interface BrickApi_ImportInstalledBrickAtomRequestBody_data {
  /** stories.json的内容 获取组件对应的文档数据 */
  stories?: Record<string, any>[];

  /** bricks.json的内容 获取所有组件id */
  bricks?: Record<string, any>;
}
