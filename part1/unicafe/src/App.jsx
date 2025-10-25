import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <main className="p-8 flex flex-col gap-6 max-w-md">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-medium">give feedback</h1>
        <div className="flex gap-2">
          <button
            className="text-sm font-medium rounded-md bg-neutral-100 px-2 py-1 hover:bg-neutral-200 active:scale-95"
            onClick={() => setGood((prev) => prev + 1)}
          >
            good
          </button>
          <button
            className="text-sm font-medium rounded-md bg-neutral-100 px-2 py-1 hover:bg-neutral-200 active:scale-95"
            onClick={() => setNeutral((prev) => prev + 1)}
          >
            neutral
          </button>
          <button
            className="text-sm font-medium rounded-md bg-neutral-100 px-2 py-1 hover:bg-neutral-200 active:scale-95"
            onClick={() => setBad((prev) => prev + 1)}
          >
            bad
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-medium">statistics</h1>
        <div className="grid grid-cols-2 gap-1 text-sm">
          <p>good</p>
          <p>{good}</p>

          <p>neutral</p>
          <p>{neutral}</p>

          <p>bad</p>
          <p>{bad}</p>
        </div>
      </div>
    </main>
  );
};

export default App;
