import { ApolloServer } from "apollo-server"
import mongoose from "mongoose"
import typeDefs from "./schema/typeDefs"
import resolvers from "./resolvers"

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})

const dbURI =
  "mongodb+srv://davidecannerozzi:10ONKGKfht2ojjq5@cluster0.am2qvz0.mongodb.net/auth1?retryWrites=true&w=majority"

// Connect to MongoDB
mongoose
  .connect(dbURI)
  .then(() => {
    console.log("Connected to MongoDB")
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error)
  })
