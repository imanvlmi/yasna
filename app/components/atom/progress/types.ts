export type ProgressColors =
  | "primary"
  | "gray"
  | "warning"
  | "success"
  | "orange"
  | "indigo"
  | "pink"
  | "purple";

export interface IProgressProps {
  color?: ProgressColors;
  percent: number;
}
