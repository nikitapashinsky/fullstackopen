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
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-1 text-sm">
          <p>good</p>
          <p>{good}</p>

          <p>neutral</p>
          <p>{neutral}</p>

          <p>bad</p>
          <p>{bad}</p>

          <p>total</p>
          <p>{totalFeedbacks}</p>
        </div>
        <div className="grid grid-cols-2 gap-1 text-sm">
          <p>total score</p>
          <p>{totalScore}</p>

          <p>average score</p>
          <p>{average.toFixed(2)}</p>

          <p>positive</p>
          <p>{positive.toFixed(2)}%</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
