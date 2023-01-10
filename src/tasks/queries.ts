import { gql } from "@apollo/client";
export const getTasks = gql`
  query getTasks {
    Task(limit: 10, offset: 0) {
      id
      priority
      status
      title
      assigneeId
      createdAt
    }
  }
`;
export const getEventLogs = gql`
  query getEventLogs {
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
