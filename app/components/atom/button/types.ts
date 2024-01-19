export interface IButton {
  color?: string;
  textColor?: string;
  title: string;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
}
