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
