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
        key: "",
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
