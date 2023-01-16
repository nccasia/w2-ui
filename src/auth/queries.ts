import { gql } from "@apollo/client";

export const userByPk = gql`
  query UserByPk($id: ID!) {
    node(id: $id) {
      ... on User {
        id
        email
        role
        lastname
        firstname
        MemberOnTeams {
          teamId
          Team {
            id
            name
            description
            organizationId
          }
          userId
        }
        Organization {
          id
          name
          description
        }
        UserPermissions {
          id
          permissionId
          userId
          Permission {
            id
            code
            permissionGroupId
          }
        }
      }
    }
  }
`;
export const getInformationUser = gql`
  query GetInformationUser($id: ID!) {
    node(id: $id) {
      ... on User {
        id
        email
        firstname
        lastname
      }
    }
  }
`;
