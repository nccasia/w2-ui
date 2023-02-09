import { gql } from "@apollo/client";

export const login = gql`
  mutation Signin($email: String = "", $password: String = "") {
    signin(data: { email: $email, password: $password }) {
      user {
        id
        email
        firstname
        lastname
      }
      accessToken
    }
  }
`;

export const updateInformationUser = gql`
  mutation UpdateInformationUser(
    $id: Int!
    $firstname: String!
    $lastname: String!
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

export const googleLogin = gql`
  mutation googleLogin($data: GoogleLoginInput!) {
    googleLogin(data: $data) {
      accessToken
      refreshToken
      user {
        id
        email
        firstname
        lastname
      }
    }
  }
`;
