/** field契约定义 */
export interface ModelFieldContract {
  /** name */
  name: string;

  /** type */
  type: string;

  /** description */
  description: string;

  /** deprecated */
  deprecated: boolean;

  /** enum */
  enum: any[];

  /** validate */
  validateRule: Record<string, any>;

  /** ref */
  ref: string;

  /** fields */
  fields: Partial<ModelFieldContract>[];
}
