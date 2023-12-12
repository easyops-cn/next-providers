/** CmdbMeasure */
export interface ModelCmdbMeasure {
  /** op */
  op: number;

  /** field */
  field: string;

  /** alias */
  alias: string;

  /** args */
  args: any[];

  /** measures */
  measures: Partial<ModelCmdbMeasure>[];
}
