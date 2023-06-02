/** Storyboard brick */
export interface ModelStoryboardBrick {
  /** Brick */
  brick: string;

  /** 属性 */
  properties: string;

  /** InjectDeep */
  injectDeep: boolean;

  /** 事件 */
  events: string;

  /** Bg */
  bg: boolean;

  /** 生命周期 */
  lifeCycle: string;

  /** 参数定义 */
  params: string;

  /** If */
  if: string;

  /** Ref */
  ref: string;

  /** Portal */
  portal: boolean;

  /** Context */
  context: any;

  /** Exports */
  exports: any;

  /** PermissionsPreCheck */
  permissionsPreCheck: string;
}
