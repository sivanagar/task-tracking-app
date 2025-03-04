import { User, Task } from "../models/index.js";
import {  AuthenticationError } from "apollo-server-express"; 
import jwt from "jsonwebtoken";
import auth from "../utils/auth.js";

const { generateToken } = auth;

const resolvers = {
  Query: {
    getUser: async (parent, args, context) => {
      const user = await User.find();
      return user;
    },
    getUserById: async (parent, args, context) => {
      console.log(context)
      if (!context.user) throw new AuthenticationError("Not logged in");
      const userData = await User.findById({ _id: context.user._id })
        .populate("tasks")
        .select('-__v -password');;

      return userData;
    },
    getTask: async (parent, args, context) => {
      console.log("getTask resolver");
      return "getTask resolver";
    },
    getTaskById: async (parent, args, context) => {
      console.log("getTaskById resolver");
      return "getTaskById resolver";
    },
  },

  Mutation: {
    register: async (parent, {username, email, password}, context) => {
      const existingUser = await User.findOne({ email: email });
      if (existingUser) {
        throw new Error("User already exists");
      }

      const user = await User.create({ username, email, password });
      const token = generateToken(user);
      // jwt.sign({ id: user._id }, process.env.JWT_SECRET,{expiresIn: "1d"});
      return { token, user };
    },

    login: async (parent, { email, password }, context) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const validPassword = await user.isCorrectPassword(password);

      if (!validPassword) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = generateToken(user);
      // jwt.sign({ id: user._id }, process.env.JWT_SECRET,{expiresIn: "1d"});
      return { token, user };
    },

    addTask: async (parent, args, context) => {
      console.log("addTask resolver");
      return "addTask resolver";
    },
    updateTask: async (parent, args, context) => {
      console.log("updateTask resolver");
      return "updateTask resolver";
    },
    deleteTask: async (parent, args, context) => {
      console.log("deleteTask resolver");
      return "deleteTask resolver";
    },
  },
};

export default resolvers;
