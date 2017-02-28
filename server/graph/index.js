const graphQLHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const schema = buildSchema(`
  type Query {
    hello: String
  }
`)
const rootValue = {
  hello () {
    return 'Hello World!'
  }
}

module.exports = graphQLHTTP({
  schema,
  rootValue,
  graphiql: process.env.NODE_ENV !== 'production'
})
