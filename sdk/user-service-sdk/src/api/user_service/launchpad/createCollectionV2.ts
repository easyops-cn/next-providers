import { http, HttpOptions } from "@next-core/brick-http";
import { ModelLaunchpadCollectionV2 } from "../../../model/user_service";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface LaunchpadApi_CreateCollectionV2RequestBody {
  /** 标题, type等于link时有值 */
  name?: string;

  /** 图标, type等于link时有值 */
  icon?: ModelLaunchpadCollectionV2["icon"];

  /** 链接, type等于link时有值 */
  link?: string;

  /** microApp:微应用;customItem:自定义菜单项;link:自定义链接 */
  type: "microApp" | "customItem" | "link";

  /** type是microApp或者customItem时生效，表示关联对象的实例Id，并且 name/icon/link 参数无效; 类型是link时此参数无效，name/icon/link 参数生效。 */
  relatedInstanceId?: string;
}

export type LaunchpadApi_CreateCollectionV2ResponseBody =
  Partial<ModelLaunchpadCollectionV2>;

/**
 * @description 新增我的收藏V2
 * @endpoint POST /api/v2/launchpad/collection
 */
export const LaunchpadApi_createCollectionV2 = async (
  data: LaunchpadApi_CreateCollectionV2RequestBody,
  options?: HttpOptions
): Promise<LaunchpadApi_CreateCollectionV2ResponseBody> =>
  /**! @contract easyops.api.user_service.launchpad.CreateCollectionV2@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<LaunchpadApi_CreateCollectionV2ResponseBody>
    >(
      "api/gateway/logic.user_service/api/v2/launchpad/collection",
      data,
      options
    )
  ).data;
