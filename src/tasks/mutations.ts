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

export const TaskDefinitionFragment = gql`
  fragment TaskDefinitionFragment on TaskDefinition {
    id
    formId
    title
    titleTemplate
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

export const getTasks = gql`
  query GetTasks {
    Task(limit: 10, offset: 0) {
      id
      dueDate
      description
      definitionId
      creatorId
      organizationId
      parentId
      priority
      status
      teamId
      title
      stateName
      User {
        id
        firstname
        lastname
        email
        organizationId
        role
      }
    }
  }
`;

export const getTaskDetail = gql`
  query TaskByPk($id: Int!) {
    Task_by_pk(id: $id) {
      ...TaskFragment
      userByCreatorid {
        id
        email
        firstname
        lastname
        organizationId
        role
      }
      assigneeId
      priority
      Tasks(where: { parentId: { _eq: $id } }) {
        ...TaskFragment
      }
    }
  }

  fragment TaskFragment on Task {
    id
    dueDate
    description
    definitionId
    creatorId
    organizationId
    stateName
    status
    priority
    teamId
    title
    values
    TaskDefinition {
      formId
    }
    Task {
      User {
        email
        firstname
        id
      }
    }
  }
`;
