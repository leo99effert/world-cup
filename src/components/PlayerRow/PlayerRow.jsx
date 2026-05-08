import ConfederationBets from '../ConfederationBets/ConfederationBets'
import MedalCell from '../MedalCell/MedalCell'
import PlayerCell from '../PlayerCell/PlayerCell'
import ScoreCell from '../ScoreCell/ScoreCell'
import { CONFEDERATIONS } from '../../constants'
import './PlayerRow.css'

function PlayerRow({ player, teamById, rank }) {
  const score = CONFEDERATIONS.filter(conf => {
    const team = teamById[player.bets[conf]]
    return team?.settled && team?.successful
  }).length

  const tiebreaker = CONFEDERATIONS.reduce((sum, conf) => {
    const team = teamById[player.bets[conf]]
    return sum + (team?.fifaRanking ?? 0)
  }, 0)

  return (
    <tr className="player-row">
      <MedalCell rank={rank} />
      <PlayerCell player={player} />
      <ConfederationBets bets={player.bets} teamById={teamById} />
      <ScoreCell score={score} tiebreaker={tiebreaker} />
    </tr>
  )
}

export default PlayerRow
