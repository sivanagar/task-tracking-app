import { gql } from "@apollo/client";

export const REGISTER = gql`
  mutation Register( $email: String! , $password: String!, $username: String!) {
    register( email: $email, password: $password, username: $username) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        tasks {
          _id
          title
          description
          status
          userId
        }
      }
    }
  }
`;

export const ADD_TASK = gql`
  mutation AddTask($title: String!, $description: String!) {
    addTask(title: $title, description: $description) {
      _id
      title
      description
      status
      userId
    }
  }
`;

export const EDIT_TASK = gql`
  mutation EditTask(
    $id: ID!
    $title: String
    $description: String
    $status: String
  ) {
    editTask(
      id: $id
      title: $title
      description: $description
      status: $status
    ) {
      _id
      title
      description
      status
    }
  }
`;

export const DELETE_TASK = gql`
  mutation deleteTask($id: ID!) {
    deleteTask(_id: $id) 
  }
`;
