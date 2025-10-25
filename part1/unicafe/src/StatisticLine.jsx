const StatisticLine = ({ text, value }) => {
  return (
    <div className="grid grid-cols-2 gap-1 text-sm">
      <p>{text}</p>
      <p>{value}</p>
    </div>
  );
};

export default StatisticLine;
