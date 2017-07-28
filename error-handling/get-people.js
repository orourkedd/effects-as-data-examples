const { cmds } = require('effects-as-data-universal')

function* getPeople() {
  const httpGet = cmds.httpGet('https://swapi.co/api/people')
  const emptyResults = { payload: { results: [] } }
  const { payload } = yield cmds.either(httpGet, emptyResults)
  return payload.results.map(p => p.name)
}

module.exports = getPeople
