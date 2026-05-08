import './ScoreCell.css'

function ScoreCell({ score, tiebreaker }) {
  return (
    <td className="score-cell">
      <div className="score-cell__inner">
        <span className="score">{score}</span>
        <span className="tiebreaker">{tiebreaker}</span>
      </div>
    </td>
  )
}

export default ScoreCell
