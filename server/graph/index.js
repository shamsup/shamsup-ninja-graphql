const graphQLHTTP = require('express-graphql')
const schema = require('./schema')

module.exports = graphQLHTTP({
  schema,
  graphiql: true
})
