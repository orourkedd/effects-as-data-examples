const { call, buildFunctions } = require('effects-as-data')
const { handlers } = require('effects-as-data-universal')
const getPeople = require('./get-people')

const functions = buildFunctions({}, handlers, { getPeople })

functions
  .getPeople()
  .then(names => {
    console.log('Function Results:')
    console.log(names.join(', '))
  })
  .catch(console.error)
