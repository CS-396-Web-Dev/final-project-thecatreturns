export interface Status {
    hunger: number;
    weight: number;
    anger: number;
  }

export interface StatusBarProps {
  label: string;
  value: number;
  color: string;
}