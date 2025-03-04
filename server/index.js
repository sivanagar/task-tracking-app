import "dotenv/config";
import { typeDefs, resolvers  } from "./schemas/index.js";
import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";


//  Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));




// Create an instance of ApolloServer
const server = new ApolloServer({ typeDefs, resolvers });


//  Start the server
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
