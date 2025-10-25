import { useState } from "react";

import Button from "./Button";
import Statistics from "./Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalFeedbacks = good + neutral + bad;
  const totalScore = good - bad;
  const average = totalFeedbacks === 0 ? 0 : totalScore / totalFeedbacks;
  const positive = totalFeedbacks === 0 ? 0 : (good / totalFeedbacks) * 100;

  const handleClick = (event) => {
    const buttonId = event.target.id;

    if (buttonId === "good") {
      const newGood = good + 1;
      setGood(newGood);
    } else if (buttonId === "neutral") {
      const newNeutral = neutral + 1;
      setNeutral(newNeutral);
    } else {
      const newBad = bad + 1;
      setBad(newBad);
    }
  };

  return (
    <main className="p-8 flex flex-col gap-6 max-w-md">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-medium">give feedback</h1>
        <div className="flex gap-2">
          <Button id="good" label="good" onClick={handleClick} />
          <Button id="neutral" label="neutral" onClick={handleClick} />
          <Button id="bad" label="bad" onClick={handleClick} />
        </div>
      </div>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        totalFeedbacks={totalFeedbacks}
        totalScore={totalScore}
        average={average}
        positive={positive}
      />
    </main>
  );
};

export default App;
