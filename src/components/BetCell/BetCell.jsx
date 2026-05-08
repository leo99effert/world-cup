import './BetCell.css'

function BetCell({ team }) {
  const status = !team?.settled ? '' : team.successful ? 'success' : 'fail'

  return (
    <td className="bet-cell">
      <span className={`flag-wrapper ${status}`}>
        <span className={`fi fi-${team?.flagCode}`} />
      </span>
    </td>
  )
}

export default BetCell
