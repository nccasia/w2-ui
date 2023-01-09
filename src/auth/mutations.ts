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
        id
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

export const userByPk = gql`
  query UserByPk($id: Int!) {
    User_by_pk(id: $id) {
      id
      email
      role
      MemberOnTeams {
        teamId
        Team {
          id
          name
          description
        }
      }
      Organization {
        id
        name
        description
      }
    }
  }
`;
