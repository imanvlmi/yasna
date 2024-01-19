export interface ICountdown {
  seconds: number;
  label?: string;
  completionMessage?: string;
  handleCountdownFinish?: () => void;
}
