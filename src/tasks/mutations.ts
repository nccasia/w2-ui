import { gql } from "@apollo/client";

export const CreateTask = gql`
  mutation CreateTask(
    $values: jsonb = ""
    $definitionId: Int!
    $creatorId: Int!
    $assigneeId: Int!
    $organizationId: Int!
    $teamId: Int!
    $dueDate: timestamp!
    $title: String!
  ) {
    insert_Task(
      objects: {
        values: $values
        description: "default"
        creatorId: $creatorId
        assigneeId: $assigneeId
        title: $title
        definitionId: $definitionId
        dueDate: $dueDate
        organizationId: $organizationId
        teamId: $teamId
      }
    ) {
      returning {
        id
      }
    }
  }
`;

export const InsertComment = gql`
  mutation InsertComment($content: String!, $taskId: Int!, $creatorId: Int!) {
    insert_Comment(
      objects: { content: $content, taskId: $taskId, creatorId: $creatorId }
    ) {
      returning {
        id
        taskId
        content
        creatorId
      }
    }
  }
`;
