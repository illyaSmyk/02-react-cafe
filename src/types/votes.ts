//  создаю интерфейс для обьнкта стану голосов
export interface Votes {
  good: number,
  neutral: number,
  bad: number
}
//литеральный тип
export type VoteType = 'good' | 'neutral' | 'bad';

