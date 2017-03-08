const graphQLHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const Article = require('../models/Article')
const schema = buildSchema(`
  type Query {
    article(title: String): Article
  }
  type Article {
    title: String!
    author: String!
    date: String!
  }
`)
const rootValue = {
  article (args) {
    console.log('args: ', args)
    return new Article({
      title () {
        return 'My first article'
      },
      author () {
        return 'Alex'
      }
    })
  }
}

module.exports = graphQLHTTP({
  schema,
  rootValue,
  graphiql: process.env.NODE_ENV !== 'production'
})
