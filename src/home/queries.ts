import { gql } from "@apollo/client";

export const getEventLogs = gql`
  query getEventLogs {
    EventLog_connection(last: 99) {
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

export const getMyCreatedTaskCountFragment = gql`
  fragment getMyCreatedTaskCountFragment on User {
    id
    email
    tasksByCreatorid_aggregate(where: { status: { _in: $status } }) {
      aggregate {
        count(distinct: true)
      }
    }
  }
`;

export const getMyCreatedTaskCount = gql`
  query getMyCreatedTaskCount($userId: ID!, $status: [String!]!) {
    node(id: $userId) {
      ...getMyCreatedTaskCountFragment
    }
  }
`;

export const getMyParticipatedTaskCountFragment = gql`
  fragment getMyParticipatedTaskCountFragment on User {
    id
    email
    Tasks_aggregate(where: { Task: { status: { _in: $status } } }) {
      aggregate {
        count(distinct: true)
      }
    }
  }
`;

export const getMyParticipatedTaskTotalCount = gql`
  query getMyParticipatedTaskCount($userId: ID!, $status: [String!]!) {
    node(id: $userId) {
      ...getMyParticipatedTaskCountFragment
    }
  }
`;

export const getMyParticipatedTaskByKeyCountFragment = gql`
  fragment getMyParticipatedTaskByKeyCountFragment on User {
    id
    email
    Tasks_aggregate(
      where: { Task: { status: { _in: $status }, key: { _eq: $key } } }
    ) {
      aggregate {
        count(distinct: true)
      }
    }
  }
`;

export const getMyParticipatedTaskByKeyCount = gql`
  query getMyParticipatedTaskByKeyCount(
    $userId: ID!
    $status: [String!]!
    $key: String!
  ) {
    node(id: $userId) {
      ...getMyParticipatedTaskByKeyCountFragment
    }
  }
`;
