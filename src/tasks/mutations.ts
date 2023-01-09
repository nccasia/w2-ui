import { gql } from "@apollo/client";

export const createTask = gql`
  mutation CreateTask(
    $values: jsonb = ""
    $definitionId: Int!
    $creatorId: Int!
    $assigneeId: Int!
    $organizationId: Int!
    $teamId: Int!
    $dueDate: timestamp!
  ) {
    insert_Task(
      objects: {
        values: $values
        organizationId: $organizationId
        dueDate: $dueDate
        description: ""
        creatorId: $creatorId
        assigneeId: $assigneeId
        title: ""
        definitionId: $definitionId
        teamId: $teamId
      }
    ) {
      returning {
        id
      }
    }
  }
`;

export const TaskDefinitionFragment = gql`
  fragment TaskDefinitionFragment on TaskDefinition {
    id
    formId
    title
  }
`;

export const getTaskDefinition = gql`
  query GetTaskDefinition {
    TaskDefinition(limit: 10, offset: 0) {
      ...TaskDefinitionFragment
    }
  }
`;

export const getFormSchema = gql`
  query GetFormSchema($id: Int!) {
    Form_by_pk(id: $id) {
      id
      name
      schema
      code
    }
  }
`;

export const getResource = gql`
  query GetResource($id: Int!) {
    Resource_by_pk(id: $id) {
      code
      id
      name
      ResourceItems {
        code
        id
        name
        resourceId
      }
    }
  }
`;
