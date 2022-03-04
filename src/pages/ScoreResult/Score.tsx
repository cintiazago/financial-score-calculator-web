import Title from "../../components/Title";
import { Score } from "../../types/score";

export const scoreObject: Score = {
  healthy: {
    bgcolor: "#04C761",
    cardTitle: "Congratulations!",
    cardSubtitle: (
      <Title>
        <p>
          Your financial wellness score is <span>Healthy.</span>
        </p>
      </Title>
    ),
    progress: 100,
  },
  medium: {
    bgcolor: "#FFC032",
    cardTitle: "There is room for improvement.",
    cardSubtitle: (
      <Title>
        <p>
          Your financial wellness score is <span>Average.</span>
        </p>
      </Title>
    ),
    progress: 66,
  },
  low: {
    bgcolor: "#D32A36",
    cardTitle: "Caution!",
    cardSubtitle: (
      <Title>
        <p>
          Your financial wellness score is <span>Unhealthy.</span>
        </p>
      </Title>
    ),
    progress: 33,
  },
  unknown: {
    bgcolor: "#E9EEF2",
    cardTitle: "Caution!",
    cardSubtitle: (
      <Title>
        <p>
          Your financial wellness score is <span>Unknown.</span>
        </p>
      </Title>
    ),
    progress: 0,
  },
};
