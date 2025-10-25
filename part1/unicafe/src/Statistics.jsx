import StatisticLine from "./StatisticLine";

const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedbacks,
  totalScore,
  average,
  positive,
}) => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-medium">statistics</h1>
      {totalFeedbacks > 0 ? (
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="total" value={totalFeedbacks} />
          </div>
          <div className="flex flex-col gap-1">
            <StatisticLine text="total score" value={totalScore} />
            <StatisticLine text="average score" value={average.toFixed(2)} />
            <StatisticLine
              text="% positive"
              value={`${positive.toFixed(2)}%`}
            />
          </div>
        </div>
      ) : (
        <p className="text-sm">no feedbacks given yet</p>
      )}
    </div>
  );
};

export default Statistics;
