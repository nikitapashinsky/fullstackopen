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

  const arr = new Array(anecdotes.length).fill(0);
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(arr);

  const mostVotesNumber = votes.toSorted(compareNumbers)[0];
  const mostVotedIndex = votes.indexOf(mostVotesNumber);
  const mostVotedAnecdote = anecdotes[mostVotedIndex];

  function handleNextClick() {
    const newSelected = Math.floor(Math.random() * anecdotes.length);
    setSelected(newSelected);
    console.log(newSelected);
  }

  function handleVoteClick() {
    const votesCopy = [...votes];
    votesCopy[selected] += 1;
    setVotes(votesCopy);
    console.log("New votes array: ", votesCopy);
  }

  function compareNumbers(a, b) {
    return b - a;
  }

  return (
    <div className="flex flex-col gap-2 p-2 h-full">
      <div className="flex flex-col-reverse gap-4 md:flex-row flex-2">
        <div className="flex-3 p-2 md:p-4">
          <h1 className="text-2xl md:text-4xl font-medium max-w-3xl">{anecdotes[selected]}</h1>
        </div>
        {mostVotesNumber > 0 && (
          <div className="flex flex-col flex-1 h-fit rounded-xl outline-4 -outline-offset-4 outline-orange-500 font-medium">
            <div className="p-4 flex flex-col gap-3">
              <h4 className="text-sm uppercase font-bold tracking-wide">Most voted</h4>
              <h3>{mostVotedAnecdote}</h3>
            </div>
            <div className="bg-orange-500 px-4 pt-2 pb-2.5 rounded-b-xl text-white">
              <p>{mostVotesNumber} votes</p>
            </div>
          </div>
        )}
      </div>
      <div className="px-2 md:px-4 pb-4 text-2xl md:text-3xl font-medium text-orange-600">
        {votes[selected]} votes
      </div>
      <div className="flex flex-col md:flex-row flex-1 gap-2">
        <button
          onClick={handleVoteClick}
          className="w-full h-full bg-neutral-100 text-2xl md:text-3xl font-medium rounded-xl min-w-0 self-start hover:bg-neutral-200 active:scale-[0.985] transition"
        >
          vote
        </button>
        <button
          onClick={handleNextClick}
          className="w-full h-full bg-neutral-100 text-2xl md:text-3xl font-medium rounded-xl min-w-0 self-start hover:bg-neutral-200 active:scale-[0.985] transition"
        >
          next anecdote
        </button>
      </div>
    </div>
  );
};

export default App;
