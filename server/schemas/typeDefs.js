import { gql } from "apollo-server-express";
// const {gql} = require('apollo-server');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }

  type Task {
    _id: ID!
    title: String!
    description: String
    status: String
    userId: ID!
    
  }
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    getUser: [User]
    getUserById: User
    getTasks: [Task]
    getTaskById(_id: ID!): Task
  }

  type Mutation {
    register(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addTask(title: String!, description: String): Task
    updateTask(
      _id: ID!
      title: String
      description: String
      status: String
    ): Task
    deleteTask(_id: ID!): Boolean
  }
`;

export default typeDefs;
