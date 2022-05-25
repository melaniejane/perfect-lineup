function totalLineupSalary(lineup) {
  return lineup.reduce((salary, player) => {
    return salary + player.salary
  }, 0)
}

function playersPerTeam(lineup) {
  return lineup.reduce((teamIdCount, player) => {
    teamIdCount[player.teamId] =
      teamIdCount[player.teamId] === undefined
        ? 1
        : teamIdCount[player.teamId] + 1

    return teamIdCount
  }, {})
}

function playersPerGame(lineup) {
  return lineup.reduce((gameIdCount, player) => {
    gameIdCount[player.gameId] =
      gameIdCount[player.gameId] === undefined
        ? 1
        : gameIdCount[player.gameId] + 1

    return gameIdCount
  }, {})
}

function playerPosition(lineup) {
  return lineup.reduce((positionCount, player) => {
    positionCount[player.position] =
      positionCount[player.position] === undefined
        ? 1
        : positionCount[player.position] + 1

    return positionCount
  }, {})
}

function exceedsSalary(lineup) {
  return totalLineupSalary(lineup) > 45000
}

function exceedsPlayers(teamIdCount) {
  return Object.values(teamIdCount).some((count) => {
    return count > 2
  })
}

function exceedsPerGame(gameIdCount) {
  return Object.values(gameIdCount).some((count) => {
    return count > 3
  })
}

function exceedsPositionCount(positionCount) {
  return (
    positionCount['P'] !== 1 ||
    positionCount['C'] !== 1 ||
    positionCount['1B'] !== 1 ||
    positionCount['2B'] !== 1 ||
    positionCount['3B'] !== 1 ||
    positionCount['SS'] !== 1 ||
    positionCount['OF'] !== 3
  )
}

function validateLineup(lineup) {
  const teamIdCount = playersPerTeam(lineup)
  const gameIdCount = playersPerGame(lineup)
  const positionCount = playerPosition(lineup)

  return (
    !exceedsSalary(lineup) &&
    !exceedsPlayers(teamIdCount) &&
    !exceedsPerGame(gameIdCount) &&
    !exceedsPositionCount(positionCount)
  )
}

module.exports = validateLineup
