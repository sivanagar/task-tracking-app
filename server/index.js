import "dotenv/config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers  } from "./schemas/index.js";
import authenticateToken from "./utils/auth.js";
import db from "./config/connection.js";
const PORT = process.env.PORT || 3001;

// const path = require('path');
const app = express();

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authenticateToken,
  });
  await server.start();
  server.applyMiddleware({ app: app });
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
}

startServer();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Create an instance of ApolloServer
// const server = new ApolloServer({ typeDefs, resolvers, context: authenticateToken });

// Serve up static assets
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });



//  Connect to MongoDB
db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

db.once("open", () => {
  console.log("MongoDB connection established successfully");
  app.listen(PORT, () => {
    console.log(`🚀 API server running on port ${PORT}!`);
  });
  
});