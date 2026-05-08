import './MedalCell.css'

const MEDALS = { 1: '🥇', 2: '🥈', 3: '🥉' }

function MedalCell({ rank }) {
  return (
    <td className="medal-cell">
      {MEDALS[rank] ?? null}
    </td>
  )
}

export default MedalCell
