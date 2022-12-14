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
        lastname
        role
        permissions {
          code
        }
      }
      accessToken
    }
  }
`;

export const getInformationUser = gql`
  query GetInformationUser($id: Int!) {
    User_by_pk(id: $id) {
      id
      email
      firstname
      lastname
    }
  }
`;

export const updateInformationUser = gql`
  mutation UpdateInformationUser(
    $id: Int!
    $firstname: String = ""
    $lastname: String = ""
  ) {
    update_User_by_pk(
      pk_columns: { id: $id }
      _set: { firstname: $firstname, lastname: $lastname }
    ) {
      lastname
      firstname
    }
  }
`;
