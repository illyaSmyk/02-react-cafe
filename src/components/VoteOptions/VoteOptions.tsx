import css from "./VoteOptions.module.css";
import type { VoteType } from "../../types/votes";
// Типизуем пропсы
interface VoteOptionsProps {
  onVote: (type: VoteType) => void; //вызываем при клике на одну из 3-х кнопок
  onReset: () => void; // для сброса
  canReset: boolean;   // показывать или нет для сброса
}

function VoteOptions({ onVote, onReset, canReset }: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onVote("good")}>Good</button>
      <button className={css.button} onClick={() => onVote("neutral")}>Neutral</button>
      <button className={css.button} onClick={() => onVote("bad")}>Bad</button>

      {canReset && (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}

export default VoteOptions;
