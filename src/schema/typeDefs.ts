import { gql } from "apollo-server"

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Query {
    user(id: ID!): User
  }
  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
  }
`

export default typeDefs
