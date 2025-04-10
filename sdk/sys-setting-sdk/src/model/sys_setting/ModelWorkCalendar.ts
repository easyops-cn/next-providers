import { ModelWorkDay, ModelWorkCalendarConfig } from ".";

/** 营业时间日历 */
export interface ModelWorkCalendar {
  /** ID(objectId类型) */
  id: string;

  /** 名称 */
  name: string;

  /** 创建人 */
  creator: string;

  /** 创建时间 */
  ctime: number;

  /** 备注 */
  memo: string;

  /** 工作日详情 */
  days: Partial<ModelWorkDay>[];

  /** 日历配置 */
  config: Partial<ModelWorkCalendarConfig>;

  /** 日历标识（可为空，不可修改；一般用于初始化时导入使用） */
  key: string;

  /** 是否内置 */
  builtin: boolean;

  /** 状态 */
  status: boolean;

  /** 年份 */
  year: string;

  /** 已经新建的年份 */
  dataYears: string[];

  /** 修改人 */
  modifier: string;

  /** 修改时间 */
  mtime: string;
}
