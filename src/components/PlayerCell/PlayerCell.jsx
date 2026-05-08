import './PlayerCell.css'

function PlayerCell({ player }) {
  return (
    <td className="player-cell">
      <span>{player.emoji}</span>
      <span>{player.name}</span>
    </td>
  )
}

export default PlayerCell
