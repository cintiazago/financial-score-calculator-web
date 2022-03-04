export enum ScoreStatuses {
  HEALTHY = "healthy",
  MEDIUM = "medium",
  LOW = "low",
  UNKNOWN = "unknown",
}

export type ScoreLocationState = {
  score: string;
};

export type ScoreItem = {
  bgcolor: string;
  cardTitle: string;
  cardSubtitle: JSX.Element;
  progress: number;
};

export type Score = {
  healthy: ScoreItem;
  medium: ScoreItem;
  low: ScoreItem;
  unknown: ScoreItem;
};
