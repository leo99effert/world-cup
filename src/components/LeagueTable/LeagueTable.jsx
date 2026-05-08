import PlayerRow from '../PlayerRow/PlayerRow'
import './LeagueTable.css'

function LeagueTable({ players, teamById }) {
  return (
    <table className="league-table">
      <tbody>
        {players.map((player, index) => (
          <PlayerRow key={player.id} player={player} teamById={teamById} rank={index + 1} />
        ))}
      </tbody>
    </table>
  )
}

export default LeagueTable
