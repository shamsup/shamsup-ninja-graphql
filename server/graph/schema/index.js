const graphQL = require('graphql')

const dummyData = require('../examples')

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLList
} = graphQL

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    displayName: { type: new GraphQLNonNull(GraphQLString) },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    following: { type: new GraphQLList(UserType) }
  })
})

// const PostType = new GraphQLInterfaceType({
//   name: 'Post',
//   fields: {
//     id: { type: new GraphQLNonNull(GraphQLString) },
//     author: { type: UserType },
//     title: { type: GraphQLString }
//   }
// })

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve (parentValue, args) {
        if ('id' in args) {
          return dummyData.users[args.id]
        }
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: QueryType
})
