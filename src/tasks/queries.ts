import { gql } from "@apollo/client";

export const getEventLog = gql`
  query geteventLog {
    EventLog(limit: 15) {
      actionId
      createdAt
      id
      organizationId
      userId
      taskId
      Action {
        content
      }
      User {
        email
      }
      Organization {
        name
      }
      Task {
        title
      }
    }
  }
`;
