import { useState } from "react";
import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";

import type { Votes, VoteType } from "../../types/votes";

function App() {
  // Создаю состояние для голосов с начальными значениями: обьект
  // с 3-мя счетчиками
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // Создаю функцию для голосования (параметр тайп типизированный как Votetype) - увеличивает значения счетчика при клике
  const handleVote = (type: VoteType) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1,
    }));
  };

  //  Стрелочная фуекция для сброса голосв - устанавливает все в ноль
  const resetVotes = () => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };

  // Провожу вычисления
  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions     // передаю пропсы в VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={totalVotes > 0}
      />
      {totalVotes > 0 ? (
        <VoteStats     // передаю пропсы в VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      ) : ( //рендерится только когда totalVotes === 0
        <Notification message="No feedback yet" />
      )}
    </div>
  );
}

export default App;