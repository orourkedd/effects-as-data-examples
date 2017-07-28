const { call, buildFunctions } = require('effects-as-data')
const { testFn, testFnV2, args } = require('effects-as-data/test')
const fetch = require('isomorphic-fetch')

const cmds = {
  httpGet(url) {
    return {
      type: 'httpGet',
      url
    }
  }
}

const handlers = {
  httpGet(cmd) {
    return fetch(cmd.url).then(r => r.json())
  }
}

function* getPeople() {
  const { results } = yield cmds.httpGet('https://swapi.co/api/people')
  const names = results.map(p => p.name)
  return names
}

// Semantic test style
testFn(getPeople, () => {
  const apiResults = { results: [{ name: 'Luke Skywalker' }] }
  // prettier-ignore
  return args()
    .yieldCmd(cmds.httpGet('https://swapi.co/api/people')).yieldReturns(apiResults)
    .returns(['Luke Skywalker'])
})()

const config = {
  onCommandComplete: telemetry => {
    console.log('Telemetry (from onCommandComplete):', telemetry)
  }
}

const functions = buildFunctions(config, handlers, { getPeople })

functions
  .getPeople()
  .then(names => {
    console.log('\n')
    console.log('Function Results:')
    console.log(names.join(', '))
  })
  .catch(console.error)
