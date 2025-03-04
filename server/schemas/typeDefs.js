import { gql } from "apollo-server-express";
// const {gql} = require('apollo-server');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    createdAt: String
  }
  type Task {
    _id: ID
    title: String
    description: String
    status: String
    userId: ID
    createdAt: String
    updatedAt: String
  }

  type Query {
    getTask: [Task]
    getTaskById(_id: ID!): Task
    getUser: [User]
    getUserById(_id: ID!): User

    hello: String
  }
    
  type Mutation {
    register(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): String
    addTask(title: String!, description: String): Task
    updateTask(
      _id: ID!
      title: String
      description: String
      status: String!
    ): Task
    deleteTask(_id: ID!): Boolean
  }
`;

export default typeDefs;
