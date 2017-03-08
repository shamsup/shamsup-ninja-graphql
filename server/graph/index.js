const graphQLHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const exampleData = require('../exampleData.js')
const Article = require('../models/Article')
const schema = buildSchema(`
  type Query {
    article(title: String): Article
    page(author: String): Page
  }

  type Article {
    title: String!
    author: String!
    date: String!
  }
  
  type Page {
    _id: String
    author: String
    about: String
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
  },
  page (args) {
    // Some db request for page info and return object
    console.log('A request for this author: ', args.author)

    const result = exampleData.find((page) => {
      return page.author === args.author
    })
    console.log(result)
    return result || 'No author that name'
  }
}

module.exports = graphQLHTTP({
  schema,
  rootValue,
  graphiql: process.env.NODE_ENV !== 'production'
})
