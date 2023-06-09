// Resolver - Retrive data from the db based on the ID
import User from "../models/User"

const userResolvers = {
  Query: {
    user: async (_: any, { id }: any) => {
      try {
        const user = await User.findById(id)
        return user
      } catch (error) {
        throw new Error("Failed to fetch user")
      }
    },
  },
  Mutation: {
    createUser: async (_: any, { username, email, password }: any) => {
      try {
        const user = new User({ username, email, password })
        const savedUser = await user.save()
        return savedUser
      } catch (error) {
        console.log(error)
        throw new Error("Failed to create user")
      }
    },
  },
}

export default userResolvers
