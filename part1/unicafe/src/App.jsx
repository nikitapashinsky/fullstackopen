import { useState } from "react";

import Button from "./Button";

const App = () => {
  // save clicks of each button to its own state
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
    </main>
  );
};

export default App;
