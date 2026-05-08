import players from './data/players.json'
import teams from './data/teams.json'
import PageHeader from './components/PageHeader/PageHeader'
import LeagueTable from './components/LeagueTable/LeagueTable'
import TeamSection from './components/TeamSection/TeamSection'
import { CONFEDERATIONS } from './constants'
import './App.css'

const teamById = Object.fromEntries(teams.map(t => [t.id, t]))

const sortedPlayers = [...players].sort((a, b) => {
  const score = p => CONFEDERATIONS.filter(c => {
    const t = teamById[p.bets[c]]
    return t?.settled && t?.successful
  }).length

  const tiebreaker = p => CONFEDERATIONS.reduce((sum, c) => {
    return sum + (teamById[p.bets[c]]?.fifaRanking ?? 0)
  }, 0)

  return score(b) - score(a) || tiebreaker(b) - tiebreaker(a)
})

function App() {
  return (
    <div className="app">
      <PageHeader />
      <LeagueTable players={sortedPlayers} teamById={teamById} />
      <TeamSection teams={teams} />
    </div>
  )
}

export default App
