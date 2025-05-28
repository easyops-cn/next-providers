import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface RuntimeApi_RuntimeMicroAppStandaloneRequestParams {
  /** version */
  version?: string;

  /** 是否显示隐藏菜单 */
  showHidden?: boolean;
}

export interface RuntimeApi_RuntimeMicroAppStandaloneResponseBody {
  /** 注入菜单信息 */
  injectMenus?: Record<string, any>[];

  /** 用户配置 */
  userConfig?: Record<string, any>;

  /** 禁止访问的菜单和launchpad */
  blackList?: Record<string, any>[];

  /** sa_na关联的资源包详情 */
  relatedResourceDetails?: RuntimeApi_RuntimeMicroAppStandaloneResponseBody_relatedResourceDetails;
}

/**
 * @description 独立小产品Runtime接口
 * @endpoint GET /api/v1/micro_app_standalone/runtime/:appId
 */
export const RuntimeApi_runtimeMicroAppStandalone = async (
  appId: string | number,
  params: RuntimeApi_RuntimeMicroAppStandaloneRequestParams,
  options?: HttpOptions
): Promise<RuntimeApi_RuntimeMicroAppStandaloneResponseBody> =>
  /**! @contract easyops.api.micro_app_standalone.runtime.RuntimeMicroAppStandalone@1.0.1 */ (
    await http.get<
      ResponseBodyWrapper<RuntimeApi_RuntimeMicroAppStandaloneResponseBody>
    >(
      `api/gateway/logic.micro_app_standalone_service/api/v1/micro_app_standalone/runtime/${appId}`,
      { ...options, params }
    )
  ).data;

export interface RuntimeApi_RuntimeMicroAppStandaloneResponseBody_relatedResourceDetails {
  /** 关联的所有资源包 */
  resourcePackageList?: string[];

  /** 需要部署的资源包信息 */
  needDeployedResourceInfos?: RuntimeApi_RuntimeMicroAppStandaloneResponseBody_relatedResourceDetails_needDeployedResourceInfos_item[];
}

export interface RuntimeApi_RuntimeMicroAppStandaloneResponseBody_relatedResourceDetails_needDeployedResourceInfos_item {
  /** 资源包名称 */
  packageName?: string;

  /** 旧版本号 */
  oldVersion?: string;

  /** 当前版本号 */
  curVersion?: string;

  /** 变更记录(yaml_list格式), 只记录oldVersion和curVersion之间的changeLog */
  changeLog?: string;

  /** 类型: 安装/升级 */
  deployType?: "install" | "upgrade";
}
