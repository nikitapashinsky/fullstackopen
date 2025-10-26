import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);

  function handleClick() {
    const newSelected = Math.floor(Math.random() * anecdotes.length);
    setSelected(newSelected);
    console.log(newSelected);
  }

  return (
    <div className="flex flex-col p-2 h-full">
      <div className="flex-2 p-4">
        <h1 className="text-3xl font-medium max-w-3xl">
          {anecdotes[selected]}
        </h1>
      </div>
      <div className="flex-1">
        <button
          onClick={handleClick}
          className="w-full h-full bg-neutral-100 rounded-md min-w-0 self-start hover:bg-neutral-200 active:scale-[0.985] transition"
        >
          next anecdote
        </button>
      </div>
    </div>
  );
};

export default App;
