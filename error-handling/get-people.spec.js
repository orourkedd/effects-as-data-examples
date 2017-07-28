const { cmds } = require('effects-as-data-universal')
const { testFn, args } = require('effects-as-data/test')
const getPeople = require('./get-people')

const testGetPeople = testFn(getPeople)

test(
  "getPeople should return a list of people's names",
  testGetPeople(() => {
    const apiResults = { payload: { results: [{ name: 'Luke Skywalker' }] } }
    const httpGet = cmds.httpGet('https://swapi.co/api/people')
    const emptyResults = { payload: { results: [] } }
    // prettier-ignore
    return args()
      .yieldCmd(cmds.either(httpGet, emptyResults)).yieldReturns(apiResults)
      .returns(['Luke Skywalker'])
  })
)

test(
  'getPeople should return an empty list if http get errors out',
  testGetPeople(() => {
    const apiResults = { payload: { results: [{ name: 'Luke Skywalker' }] } }
    const httpGet = cmds.httpGet('https://swapi.co/api/people')
    const emptyResults = { payload: { results: [] } }
    // prettier-ignore
    return args()
      .yieldCmd(cmds.either(httpGet, emptyResults)).yieldReturns(emptyResults)
      .returns([])
  })
)
