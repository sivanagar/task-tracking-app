import { User, Task } from "../models/index.js";
import { AuthenticationError } from "apollo-server-express";
import auth from "../utils/auth.js";

const { generateToken } = auth;

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (!context.user) throw new AuthenticationError("Not logged in");
      const userData = await User.findById({ _id: context.user._id })
        .populate("tasks")
        .select("-__v -password");
      return userData;
    },
    getUser: async (parent, args, context) => {
      const user = await User.find();
      return user;
    },
    getUserById: async (parent, args, context) => {
      if (!context.user) throw new AuthenticationError("Not logged in");
      const userData = await User.findById({ _id: context.user._id })
        .populate("tasks")
        .select("-__v -password");

      return userData;
    },
    getTasks: async (parent, args, context) => {
      console.log("getTask resolver");
      if (!context.user) throw new AuthenticationError("Not logged in");
      const tasks = await Task.find({ userId: context.user._id });

      return tasks;
    },
    getTaskById: async (parent, { _id }, context) => {
      if (!context.user) throw new AuthenticationError("Not logged in");
      const task = await Task.findById({ _id: _id });
      return task;
    },
  },

  Mutation: {
    register: async (parent, { username, email, password }, context) => {
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
      console.log("login resolver");
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const validPassword = await user.isCorrectPassword(password);

      if (!validPassword) {
        throw new AuthenticationError("Incorrect credentials");
      }
      console.log("user", user);
      const token = generateToken(user);
      console.log("token", token);
      // jwt.sign({ id: user._id }, process.env.JWT_SECRET,{expiresIn: "1d"});
      return { token, user };
    },

    addTask: async (parent, { title, description }, context) => {
      console.log("addTask resolver");
      if (!context.user) throw new AuthenticationError("Not logged in");
      const newTask = await Task.create({
        title,
        description,
        userId: context.user._id,
      });

      const user = await User.findByIdAndUpdate(
        { _id: context.user._id },
        { $push: { tasks: newTask._id } },
        { new: true }
      );
      return newTask;
    },

    updateTask: async (
      parent,
      { _id, title, description, status },
      context
    ) => {
      if (!context.user) throw new AuthenticationError("Not auythenticated");
      const updatedTask = await Task.findOneAndUpdate(
        { _id: _id, userId: context.user._id },
        { title, description, status },
        {
          new: true,
          // runValidators: true,
        }
      );
      if (!updatedTask) {
        throw new Error("Task not found!");
      }
      return updatedTask;
    },

    deleteTask: async (parent, args, context) => {
      console.log("deleteTask resolver");
      if (!context.user) throw new AuthenticationError("Not authenticated");
      const deletedTask = await Task.findOneAndDelete({
        _id: args._id,
        userId: context.user._id,
      });
      if (!deletedTask) {
        throw new Error("Task not found!");
      }

      return true;
    },
  },
};

export default resolvers;
