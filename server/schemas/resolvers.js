import { User, Task } from "../models/index.js";
import  bcrypt  from "bcryptjs";
import jwt from "jsonwebtoken";

const resolvers = {
  Query: {
    getTask: async (parent, args, context) => {
      console.log("getTask resolver");
      return "getTask resolver";
    },
    getTaskById: async (parent, args, context) => {
      console.log("getTaskById resolver");
      return "getTaskById resolver";
    },
    getUser: async (parent, args, context) => {
      const user = await User.find();
      return user;
    },
    getUserById: async (parent, args, context) => {
      console.log("getUserById resolver");
      return "getUserById resolver";
    },
  },

  Mutation: {
    register: async (parent, args, context) => {
      console.log("register resolver");
      const existingUser = await User.findOne({ email: args.email });
      if (existingUser) {
        throw new Error("User already exists");
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(args.password, salt);

      const user = await User.create({
        username: args.username,
        email: args.email,
        password: hashedPassword,
      });
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET,{expiresIn: "1d"});
      return token;
    },
    login: async (parent, args, context) => {
      console.log("login resolver");
      const user = await User.findOne({ email: args.email });
      if (!user) {
        throw new Error("Invalid credentials");
      }
      const validPassword = await bcrypt.compare(args.password, user.password);
      if (!validPassword) {
        throw new Error("Invalid password");
      }
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET,{expiresIn: "1d"});
      return token;
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
