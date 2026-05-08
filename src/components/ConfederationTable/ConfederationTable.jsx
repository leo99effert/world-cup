import './ConfederationTable.css'

function getResult(team) {
  if (!team.settled) return null
  return team.successful ? '✓' : '✗'
}

function getResultClass(team) {
  if (!team.settled) return ''
  return team.successful ? 'success' : 'fail'
}

function ConfederationTable({ confederation, teams }) {
  return (
    <div className="confederation-table">
      <h3>{confederation}</h3>
      <table>
        <tbody>
          {teams.map(team => (
            <tr key={team.id}>
              <td><span className={`fi fi-${team.flagCode}`} /> {team.name} <span className="ranking">#{team.fifaRanking}</span></td>
              <td className={getResultClass(team)}>{getResult(team)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ConfederationTable
