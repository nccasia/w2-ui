import { gql } from "@apollo/client";
export const getEventLogs = gql`
  query getEventLogs {
    EventLog_connection(last: 10) {
      edges {
        node {
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
    }
  }
`;

export const getTaskDefinition = gql`
  query GetTaskDefinition {
    TaskDefinition_connection {
      edges {
        node {
          id
          Form {
            id
          }
          parentId
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

export const getFormSchema = gql`
  query GetFormSchema($id: ID!) {
    node(id: $id) {
      ... on Form {
        id
        name
        schema
        code
      }
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
    Task_connection {
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

export const getTaskDetail = gql`
  query TaskByPk($id: ID!) {
    node(id: $id) {
      ... on Task {
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
        TaskDefinition {
          Form {
            id
          }
        }
      }
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
    title
    TaskDefinition {
      Form {
        id
      }
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
