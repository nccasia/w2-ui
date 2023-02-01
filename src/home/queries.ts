import { gql } from "@apollo/client";

export const getEventLogs = gql`
  query getEventLogs {
    EventLog_connection(last: 99) {
      edges {
        node {
          createdAt
          id
          organizationId
          userId
          taskId
          content
          intent
          domain
          action
          User {
            email
          }
          Organization {
            name
          }
        }
      }
    }
  }
`;
