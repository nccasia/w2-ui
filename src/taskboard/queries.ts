import { gql } from "@apollo/client";

export const TaskEventLogFragment = gql`
  fragment TaskEventLogFragment on EventLog {
    createdAt
    id
    organizationId
    userId
    taskId
    content
    intent
    domain
    action
    createdAt
    User {
      id
      email
      lastname
      firstname
      fullName
      avatarId
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
            code
          }
          organizationId
          title
          titleTemplate
          description
          createdAt
          keyTemplate
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
  query GetTasks($first: Int, $last: Int, $after: String, $before: String) {
    Task_connection(
      where: { parentId: { _is_null: true } }
      first: $first
      after: $after
      before: $before
      last: $last
      order_by: { createdAt: desc }
    ) {
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
          assigneeId
          state
          User {
            id
            firstname
            lastname
            fullName
            email
            organizationId
            role
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`;

export const TaskDetailFragment = gql`
  fragment TaskDetailFragment on Task {
    id
    assigneeId
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
    state
    formConfig
    userByCreatorid {
      id
      email
      firstname
      fullName
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
    EventLogs {
      ...TaskEventLogFragment
    }
  }
`;

export const getTaskDetail = gql`
  query TaskByPk($id: ID!) {
    node(id: $id) {
      ...TaskDetailFragment
    }
  }
`;

export const TaskFragment = gql`
  fragment TaskFragment on Task {
    id
    dueDate
    assigneeId
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
      values
    }
    userByCreatorid {
      id
      email
      firstname
      lastname
      fullName
      organizationId
      role
    }
    userByReporterid {
      id
      email
      firstname
      lastname
      fullName
      organizationId
      role
    }
    User {
      id
      firstname
      lastname
      fullName
      email
      avatarId
    }
  }
`;
export const TaskBoardFragment = gql`
  fragment TaskBoardFragment on TaskBoard {
    code
    id
    name
    taskDefinitionId
    viewConfig
    viewType
  }
`;
export const getComment = gql`
  query GetComment($taskId: Int!) {
    Comment_connection(where: { taskId: { _eq: $taskId } }) {
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
            fullName
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

export const getMyTasks = gql`
  query GetMyTasks(
    $id: Int!
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    Task_connection(
      where: {
        Tasks: { assigneeId: { _eq: $id }, parentId: { _is_null: false } }
      }
      after: $after
      before: $before
      first: $first
      last: $last
      order_by: { createdAt: desc }
    ) {
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
          state
          User {
            id
            firstname
            lastname
            email
            fullName
            organizationId
            role
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`;
export const getViewConfig = gql`
  query GetViewConfig($code: String!) {
    TaskBoard_connection(where: { code: { _eq: $code } }) {
      edges {
        node {
          ...TaskBoardFragment
        }
      }
    }
  }
`;
export const getTaskByBoard = gql`
  query GetTaskByBoard($definitionId: Int!) {
    Task_connection(
      where: {
        parentId: { _is_null: true }
        definitionId: { _eq: $definitionId }
      }
    ) {
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
          assigneeId
          state
          User {
            id
            firstname
            lastname
            email
            fullName
            organizationId
            role
          }
        }
      }
    }
  }
`;

export const getUser = gql`
  query GetUser {
    User_connection {
      edges {
        node {
          email
          firstname
          id
          lastname
          fullName
          role
        }
      }
    }
  }
`;
