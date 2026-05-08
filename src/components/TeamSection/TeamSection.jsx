import ConfederationTable from '../ConfederationTable/ConfederationTable'
import { CONFEDERATIONS, CONFEDERATION_LABELS } from '../../constants'
import './TeamSection.css'

function TeamSection({ teams }) {
  return (
    <div className="team-section">
      {CONFEDERATIONS.map(key => (
        <ConfederationTable
          key={key}
          confederation={CONFEDERATION_LABELS[key]}
          teams={teams.filter(t => t.confederation === key)}
        />
      ))}
    </div>
  )
}

export default TeamSection
