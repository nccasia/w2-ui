import { gql } from "@apollo/client";

export const requestPasswordReset = gql`
  query MyQuery {
    hello(name: "world")
  }
`;

export const login = gql`
  mutation Login($email: String = "", $password: String = "") {
    login(data: { email: $email, password: $password }) {
      user {
        email
        firstname
        role
        permissions {
          code
        }
      }
      accessToken
    }
  }
`;
