const { cmds } = require('effects-as-data-universal')

function* getPeople() {
  const httpGet1 = cmds.httpGet('https://swapi.co/api/people/1')
  const httpGet2 = cmds.httpGet('https://swapi.co/api/people/2')
  const [result1, result2] = yield [httpGet1, httpGet2]
  return [result1.payload, result2.payload].map(p => p.name)
}

module.exports = getPeople
