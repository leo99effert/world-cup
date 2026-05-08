import BetCell from '../BetCell/BetCell'
import { CONFEDERATIONS } from '../../constants'
import './ConfederationBets.css'

function ConfederationBets({ bets, teamById }) {
  return (
    <>
      {CONFEDERATIONS.map(conf => (
        <BetCell key={conf} team={teamById[bets[conf]]} />
      ))}
    </>
  )
}

export default ConfederationBets
