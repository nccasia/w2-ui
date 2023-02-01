import { gql } from "@apollo/client";

export const getTaskEventLogs = gql`
  query getTaskEventLogs($taskId: Int!) {
    EventLog_connection(last: 99, where: { taskId: { _eq: $taskId } }) {
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

export const getTaskDefinition = gql`
  query GetTaskDefinition {
    TaskDefinition_connection(where: { parentId: { _is_null: true } }) {
      edges {
        node {
          id
          Form {
            id
          }
          organizationId
          title
          titleTemplate
          description
          createdAt
        }
      }
    }
  }
`;

export const FormFragment = gql`
  fragment FormFragment on Form {
    id
    name
    schema
    code
  }
`;

export const getFormSchema = gql`
  query GetFormSchema($id: ID!) {
    node(id: $id) {
      ...FormFragment
    }
  }
`;

export const getResource = gql`
  query GetResource {
    Resource_connection {
      edges {
        node {
          id
          name
          organizationId
          description
          code
        }
      }
    }
  }
`;

export const getResourceItems = gql`
  query GetResourceItems($id: ID = "") {
    node(id: $id) {
      ... on Resource {
        id
        name
        organizationId
        description
        code
        ResourceItems {
          ...ResourceItemFragment
        }
      }
    }
  }
`;

export const ResourceItemFragment = gql`
  fragment ResourceItemFragment on ResourceItem {
    id
    name
    description
    code
  }
`;

export const getTasks = gql`
  query GetTasks {
    Task_connection(where: { parentId: { _is_null: true } }) {
      edges {
        node {
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
    }
  }
`;

export const TaskDetailFragmemt = gql`
  fragment TaskDetailFragmemt on Task {
    id
    creatorId
    definitionId
    description
    dueDate
    organizationId
    status
    teamId
    title
    values
    parentId
    priority
    userByCreatorid {
      id
      email
      firstname
      lastname
      organizationId
      role
    }
    Tasks {
      ...TaskFragment
    }
    priority
    Form {
      id
    }
    TaskDefinition {
      id
    }
  }
`;

export const getTaskDetail = gql`
  query TaskByPk($id: ID!) {
    node(id: $id) {
      ...TaskDetailFragmemt
    }
  }
`;

export const TaskFragment = gql`
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
    values
    teamId
    state
    formId
    parentId
    title
    isActive
    Task {
      id
    }
    Form {
      id
    }
  }
`;

export const getComment = gql`
  query GetComment {
    Comment_connection {
      edges {
        node {
          id
          taskId
          creatorId
          content
          User {
            id
            email
            lastname
            firstname
            avatarId
          }
          Task {
            id
          }
          createdAt
          updatedAt
        }
      }
    }
  }
`;
