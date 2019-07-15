import { gql } from "apollo-boost";

export const signUp = gql`
  mutation($data: UserCreateInput!) {
    signUp(data: $data) {
      id
      email
    }
  }
`;
export const signIn = gql`
  mutation($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      email
    }
  }
`;
