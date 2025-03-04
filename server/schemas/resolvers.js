import { User, Task } from "../models/index.js";


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
      const user = await User.create(args);
      // return { token, user };
      return user;
    },
    login: async (parent, args, context) => {
      console.log("login resolver");
      return "login resolver";
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


