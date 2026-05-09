import './PlayerCell.css'

function PlayerCell({ player }) {
  return (
    <td className="player-cell">
      <div className="player-cell-inner">
        <span>{player.emoji}</span>
        <span>{player.name}</span>
      </div>
    </td>
  )
}

export default PlayerCell
