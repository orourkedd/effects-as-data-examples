const { call, buildFunctions } = require('effects-as-data')
const { testFn, testFnV2, args } = require('effects-as-data/test')
const fetch = require('isomorphic-fetch')

function httpGetCommand(url) {
  return {
    type: 'httpGet',
    url
  }
}

function httpGetHandler(cmd) {
  return fetch(cmd.url).then(r => r.json())
}

function* getPeople() {
  const { results } = yield httpGetCommand('https://swapi.co/api/people')
  const names = results.map(p => p.name)
  return names
}

// Semantic test style
testFn(getPeople, () => {
  const apiResults = { results: [{ name: 'Luke Skywalker' }] }
  // prettier-ignore
  return args()
    .yieldCmd(httpGetCommand('https://swapi.co/api/people')).yieldReturns(apiResults)
    .returns(['Luke Skywalker'])
})()

// Data only test v2
testFnV2(getPeople, () => {
  const apiResults = { results: [{ name: 'Luke Skywalker' }] }
  // prettier-ignore
  return [
    [],
    [httpGetCommand('https://swapi.co/api/people'), apiResults],
    ['Luke Skywalker']
  ]
})()

// Data only test v1
testFn(getPeople, () => {
  const apiResults = { results: [{ name: 'Luke Skywalker' }] }
  // prettier-ignore
  return [
    [[], httpGetCommand('https://swapi.co/api/people')],
    [apiResults, ['Luke Skywalker']]
  ]
})()

const config = {
  onCommandComplete: telemetry => {
    console.log('Telemetry (from onCommandComplete):', telemetry)
  }
}

const functions = buildFunctions(
  config,
  { httpGet: httpGetHandler },
  { getPeople }
)

functions
  .getPeople()
  .then(names => {
    console.log('\n')
    console.log('Function Results:')
    console.log(names.join(', '))
  })
  .catch(console.error)
