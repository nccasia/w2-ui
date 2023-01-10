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
      `;
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
