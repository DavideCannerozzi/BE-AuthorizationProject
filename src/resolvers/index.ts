import userResolvers from "./userResolver"

const resolvers = {
  Query: {
    user: userResolvers.Query.user,
  },
  Mutation: {
    createUser: userResolvers.Mutation.createUser,
  },
}

export default resolvers
