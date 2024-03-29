/* eslint-disable */
import * as Types from './types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@saleor/hooks/graphql';
const defaultOptions = {} as const;
export const GetMyCreatedTaskCountFragmentFragmentDoc = gql`
    fragment getMyCreatedTaskCountFragment on User {
  id
  email
  tasksByCreatorid_aggregate(where: {status: {_in: $status}}) {
    aggregate {
      count(distinct: true)
    }
  }
}
    `;
export const GetMyParticipatedTaskCountFragmentFragmentDoc = gql`
    fragment getMyParticipatedTaskCountFragment on User {
  id
  email
  Tasks_aggregate(where: {Task: {status: {_in: $status}}}) {
    aggregate {
      count(distinct: true)
    }
  }
}
    `;
export const GetMyParticipatedTaskByKeyCountFragmentFragmentDoc = gql`
    fragment getMyParticipatedTaskByKeyCountFragment on User {
  id
  email
  Tasks_aggregate(where: {Task: {status: {_in: $status}, key: {_eq: $key}}}) {
    aggregate {
      count(distinct: true)
    }
  }
}
    `;
export const FormFragmentFragmentDoc = gql`
    fragment FormFragment on Form {
  id
  name
  schema
  code
}
    `;
export const ResourceItemFragmentFragmentDoc = gql`
    fragment ResourceItemFragment on ResourceItem {
  id
  name
  description
  code
}
    `;
export const TaskFragmentFragmentDoc = gql`
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
export const TaskEventLogFragmentFragmentDoc = gql`
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
export const TaskDetailFragmentFragmentDoc = gql`
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
    ${TaskFragmentFragmentDoc}
${TaskEventLogFragmentFragmentDoc}`;
export const TaskBoardFragmentFragmentDoc = gql`
    fragment TaskBoardFragment on TaskBoard {
  code
  id
  name
  taskDefinitionId
  viewConfig
  viewType
}
    `;
export const SigninDocument = gql`
    mutation Signin($email: String = "", $password: String = "") {
  signin(data: {email: $email, password: $password}) {
    user {
      id
      email
      firstname
      lastname
    }
    accessToken
  }
}
    `;
export type SigninMutationFn = Apollo.MutationFunction<Types.SigninMutation, Types.SigninMutationVariables>;

/**
 * __useSigninMutation__
 *
 * To run a mutation, you first call `useSigninMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSigninMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signinMutation, { data, loading, error }] = useSigninMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSigninMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.SigninMutation, Types.SigninMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.SigninMutation, Types.SigninMutationVariables>(SigninDocument, options);
      }
export type SigninMutationHookResult = ReturnType<typeof useSigninMutation>;
export type SigninMutationResult = Apollo.MutationResult<Types.SigninMutation>;
export type SigninMutationOptions = Apollo.BaseMutationOptions<Types.SigninMutation, Types.SigninMutationVariables>;
export const UpdateInformationUserDocument = gql`
    mutation UpdateInformationUser($id: Int!, $firstname: String!, $lastname: String!) {
  update_User_by_pk(
    pk_columns: {id: $id}
    _set: {firstname: $firstname, lastname: $lastname}
  ) {
    lastname
    firstname
  }
}
    `;
export type UpdateInformationUserMutationFn = Apollo.MutationFunction<Types.UpdateInformationUserMutation, Types.UpdateInformationUserMutationVariables>;

/**
 * __useUpdateInformationUserMutation__
 *
 * To run a mutation, you first call `useUpdateInformationUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateInformationUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateInformationUserMutation, { data, loading, error }] = useUpdateInformationUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      firstname: // value for 'firstname'
 *      lastname: // value for 'lastname'
 *   },
 * });
 */
export function useUpdateInformationUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.UpdateInformationUserMutation, Types.UpdateInformationUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.UpdateInformationUserMutation, Types.UpdateInformationUserMutationVariables>(UpdateInformationUserDocument, options);
      }
export type UpdateInformationUserMutationHookResult = ReturnType<typeof useUpdateInformationUserMutation>;
export type UpdateInformationUserMutationResult = Apollo.MutationResult<Types.UpdateInformationUserMutation>;
export type UpdateInformationUserMutationOptions = Apollo.BaseMutationOptions<Types.UpdateInformationUserMutation, Types.UpdateInformationUserMutationVariables>;
export const GoogleLoginDocument = gql`
    mutation googleLogin($data: GoogleLoginInput!) {
  googleLogin(data: $data) {
    accessToken
    refreshToken
    user {
      id
      email
      firstname
      lastname
    }
  }
}
    `;
export type GoogleLoginMutationFn = Apollo.MutationFunction<Types.GoogleLoginMutation, Types.GoogleLoginMutationVariables>;

/**
 * __useGoogleLoginMutation__
 *
 * To run a mutation, you first call `useGoogleLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGoogleLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [googleLoginMutation, { data, loading, error }] = useGoogleLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGoogleLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.GoogleLoginMutation, Types.GoogleLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.GoogleLoginMutation, Types.GoogleLoginMutationVariables>(GoogleLoginDocument, options);
      }
export type GoogleLoginMutationHookResult = ReturnType<typeof useGoogleLoginMutation>;
export type GoogleLoginMutationResult = Apollo.MutationResult<Types.GoogleLoginMutation>;
export type GoogleLoginMutationOptions = Apollo.BaseMutationOptions<Types.GoogleLoginMutation, Types.GoogleLoginMutationVariables>;
export const UserByPkDocument = gql`
    query UserByPk($id: ID!) {
  node(id: $id) {
    ... on User {
      id
      email
      role
      lastname
      firstname
      fullName
      organizationId
      MemberOnTeams {
        teamId
        Team {
          id
          name
          description
          organizationId
        }
        userId
        User {
          id
        }
      }
      Organization {
        id
        name
        description
      }
      UserPermissions {
        id
        permissionId
        userId
        Permission {
          id
          code
          permissionGroupId
        }
      }
    }
  }
}
    `;

/**
 * __useUserByPkQuery__
 *
 * To run a query within a React component, call `useUserByPkQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserByPkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserByPkQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserByPkQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.UserByPkQuery, Types.UserByPkQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.UserByPkQuery, Types.UserByPkQueryVariables>(UserByPkDocument, options);
      }
export function useUserByPkLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.UserByPkQuery, Types.UserByPkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.UserByPkQuery, Types.UserByPkQueryVariables>(UserByPkDocument, options);
        }
export type UserByPkQueryHookResult = ReturnType<typeof useUserByPkQuery>;
export type UserByPkLazyQueryHookResult = ReturnType<typeof useUserByPkLazyQuery>;
export type UserByPkQueryResult = Apollo.QueryResult<Types.UserByPkQuery, Types.UserByPkQueryVariables>;
export const GetInformationUserDocument = gql`
    query GetInformationUser($id: ID!) {
  node(id: $id) {
    ... on User {
      id
      email
      firstname
      lastname
      role
      fullName
    }
  }
}
    `;

/**
 * __useGetInformationUserQuery__
 *
 * To run a query within a React component, call `useGetInformationUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInformationUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInformationUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetInformationUserQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.GetInformationUserQuery, Types.GetInformationUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetInformationUserQuery, Types.GetInformationUserQueryVariables>(GetInformationUserDocument, options);
      }
export function useGetInformationUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetInformationUserQuery, Types.GetInformationUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetInformationUserQuery, Types.GetInformationUserQueryVariables>(GetInformationUserDocument, options);
        }
export type GetInformationUserQueryHookResult = ReturnType<typeof useGetInformationUserQuery>;
export type GetInformationUserLazyQueryHookResult = ReturnType<typeof useGetInformationUserLazyQuery>;
export type GetInformationUserQueryResult = Apollo.QueryResult<Types.GetInformationUserQuery, Types.GetInformationUserQueryVariables>;
export const GetEventLogsDocument = gql`
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

/**
 * __useGetEventLogsQuery__
 *
 * To run a query within a React component, call `useGetEventLogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventLogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventLogsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetEventLogsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Types.GetEventLogsQuery, Types.GetEventLogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetEventLogsQuery, Types.GetEventLogsQueryVariables>(GetEventLogsDocument, options);
      }
export function useGetEventLogsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetEventLogsQuery, Types.GetEventLogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetEventLogsQuery, Types.GetEventLogsQueryVariables>(GetEventLogsDocument, options);
        }
export type GetEventLogsQueryHookResult = ReturnType<typeof useGetEventLogsQuery>;
export type GetEventLogsLazyQueryHookResult = ReturnType<typeof useGetEventLogsLazyQuery>;
export type GetEventLogsQueryResult = Apollo.QueryResult<Types.GetEventLogsQuery, Types.GetEventLogsQueryVariables>;
export const GetMyCreatedTaskCountDocument = gql`
    query getMyCreatedTaskCount($userId: ID!, $status: [String!]!) {
  node(id: $userId) {
    ...getMyCreatedTaskCountFragment
  }
}
    ${GetMyCreatedTaskCountFragmentFragmentDoc}`;

/**
 * __useGetMyCreatedTaskCountQuery__
 *
 * To run a query within a React component, call `useGetMyCreatedTaskCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyCreatedTaskCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyCreatedTaskCountQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useGetMyCreatedTaskCountQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.GetMyCreatedTaskCountQuery, Types.GetMyCreatedTaskCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetMyCreatedTaskCountQuery, Types.GetMyCreatedTaskCountQueryVariables>(GetMyCreatedTaskCountDocument, options);
      }
export function useGetMyCreatedTaskCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetMyCreatedTaskCountQuery, Types.GetMyCreatedTaskCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetMyCreatedTaskCountQuery, Types.GetMyCreatedTaskCountQueryVariables>(GetMyCreatedTaskCountDocument, options);
        }
export type GetMyCreatedTaskCountQueryHookResult = ReturnType<typeof useGetMyCreatedTaskCountQuery>;
export type GetMyCreatedTaskCountLazyQueryHookResult = ReturnType<typeof useGetMyCreatedTaskCountLazyQuery>;
export type GetMyCreatedTaskCountQueryResult = Apollo.QueryResult<Types.GetMyCreatedTaskCountQuery, Types.GetMyCreatedTaskCountQueryVariables>;
export const GetMyParticipatedTaskCountDocument = gql`
    query getMyParticipatedTaskCount($userId: ID!, $status: [String!]!) {
  node(id: $userId) {
    ...getMyParticipatedTaskCountFragment
  }
}
    ${GetMyParticipatedTaskCountFragmentFragmentDoc}`;

/**
 * __useGetMyParticipatedTaskCountQuery__
 *
 * To run a query within a React component, call `useGetMyParticipatedTaskCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyParticipatedTaskCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyParticipatedTaskCountQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useGetMyParticipatedTaskCountQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.GetMyParticipatedTaskCountQuery, Types.GetMyParticipatedTaskCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetMyParticipatedTaskCountQuery, Types.GetMyParticipatedTaskCountQueryVariables>(GetMyParticipatedTaskCountDocument, options);
      }
export function useGetMyParticipatedTaskCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetMyParticipatedTaskCountQuery, Types.GetMyParticipatedTaskCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetMyParticipatedTaskCountQuery, Types.GetMyParticipatedTaskCountQueryVariables>(GetMyParticipatedTaskCountDocument, options);
        }
export type GetMyParticipatedTaskCountQueryHookResult = ReturnType<typeof useGetMyParticipatedTaskCountQuery>;
export type GetMyParticipatedTaskCountLazyQueryHookResult = ReturnType<typeof useGetMyParticipatedTaskCountLazyQuery>;
export type GetMyParticipatedTaskCountQueryResult = Apollo.QueryResult<Types.GetMyParticipatedTaskCountQuery, Types.GetMyParticipatedTaskCountQueryVariables>;
export const GetMyParticipatedTaskByKeyCountDocument = gql`
    query getMyParticipatedTaskByKeyCount($userId: ID!, $status: [String!]!, $key: String!) {
  node(id: $userId) {
    ...getMyParticipatedTaskByKeyCountFragment
  }
}
    ${GetMyParticipatedTaskByKeyCountFragmentFragmentDoc}`;

/**
 * __useGetMyParticipatedTaskByKeyCountQuery__
 *
 * To run a query within a React component, call `useGetMyParticipatedTaskByKeyCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyParticipatedTaskByKeyCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyParticipatedTaskByKeyCountQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      status: // value for 'status'
 *      key: // value for 'key'
 *   },
 * });
 */
export function useGetMyParticipatedTaskByKeyCountQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.GetMyParticipatedTaskByKeyCountQuery, Types.GetMyParticipatedTaskByKeyCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetMyParticipatedTaskByKeyCountQuery, Types.GetMyParticipatedTaskByKeyCountQueryVariables>(GetMyParticipatedTaskByKeyCountDocument, options);
      }
export function useGetMyParticipatedTaskByKeyCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetMyParticipatedTaskByKeyCountQuery, Types.GetMyParticipatedTaskByKeyCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetMyParticipatedTaskByKeyCountQuery, Types.GetMyParticipatedTaskByKeyCountQueryVariables>(GetMyParticipatedTaskByKeyCountDocument, options);
        }
export type GetMyParticipatedTaskByKeyCountQueryHookResult = ReturnType<typeof useGetMyParticipatedTaskByKeyCountQuery>;
export type GetMyParticipatedTaskByKeyCountLazyQueryHookResult = ReturnType<typeof useGetMyParticipatedTaskByKeyCountLazyQuery>;
export type GetMyParticipatedTaskByKeyCountQueryResult = Apollo.QueryResult<Types.GetMyParticipatedTaskByKeyCountQuery, Types.GetMyParticipatedTaskByKeyCountQueryVariables>;
export const CreateTaskDocument = gql`
    mutation CreateTask($data: New_task!) {
  createTaskInput(newTask: $data) {
    id
  }
}
    `;
export type CreateTaskMutationFn = Apollo.MutationFunction<Types.CreateTaskMutation, Types.CreateTaskMutationVariables>;

/**
 * __useCreateTaskMutation__
 *
 * To run a mutation, you first call `useCreateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaskMutation, { data, loading, error }] = useCreateTaskMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateTaskMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.CreateTaskMutation, Types.CreateTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.CreateTaskMutation, Types.CreateTaskMutationVariables>(CreateTaskDocument, options);
      }
export type CreateTaskMutationHookResult = ReturnType<typeof useCreateTaskMutation>;
export type CreateTaskMutationResult = Apollo.MutationResult<Types.CreateTaskMutation>;
export type CreateTaskMutationOptions = Apollo.BaseMutationOptions<Types.CreateTaskMutation, Types.CreateTaskMutationVariables>;
export const InsertCommentDocument = gql`
    mutation InsertComment($content: String!, $taskId: Int!, $creatorId: Int!) {
  insert_Comment(
    objects: {content: $content, taskId: $taskId, creatorId: $creatorId}
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
export type InsertCommentMutationFn = Apollo.MutationFunction<Types.InsertCommentMutation, Types.InsertCommentMutationVariables>;

/**
 * __useInsertCommentMutation__
 *
 * To run a mutation, you first call `useInsertCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertCommentMutation, { data, loading, error }] = useInsertCommentMutation({
 *   variables: {
 *      content: // value for 'content'
 *      taskId: // value for 'taskId'
 *      creatorId: // value for 'creatorId'
 *   },
 * });
 */
export function useInsertCommentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.InsertCommentMutation, Types.InsertCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.InsertCommentMutation, Types.InsertCommentMutationVariables>(InsertCommentDocument, options);
      }
export type InsertCommentMutationHookResult = ReturnType<typeof useInsertCommentMutation>;
export type InsertCommentMutationResult = Apollo.MutationResult<Types.InsertCommentMutation>;
export type InsertCommentMutationOptions = Apollo.BaseMutationOptions<Types.InsertCommentMutation, Types.InsertCommentMutationVariables>;
export const SubmitTaskDocument = gql`
    mutation SubmitTask($value: json!, $formId: Int!, $taskId: Int!) {
  submitTask(input: {value: $value, taskId: $taskId, formId: $formId}) {
    submitTask {
      id
      name
      code
      description
    }
  }
}
    `;
export type SubmitTaskMutationFn = Apollo.MutationFunction<Types.SubmitTaskMutation, Types.SubmitTaskMutationVariables>;

/**
 * __useSubmitTaskMutation__
 *
 * To run a mutation, you first call `useSubmitTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitTaskMutation, { data, loading, error }] = useSubmitTaskMutation({
 *   variables: {
 *      value: // value for 'value'
 *      formId: // value for 'formId'
 *      taskId: // value for 'taskId'
 *   },
 * });
 */
export function useSubmitTaskMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.SubmitTaskMutation, Types.SubmitTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.SubmitTaskMutation, Types.SubmitTaskMutationVariables>(SubmitTaskDocument, options);
      }
export type SubmitTaskMutationHookResult = ReturnType<typeof useSubmitTaskMutation>;
export type SubmitTaskMutationResult = Apollo.MutationResult<Types.SubmitTaskMutation>;
export type SubmitTaskMutationOptions = Apollo.BaseMutationOptions<Types.SubmitTaskMutation, Types.SubmitTaskMutationVariables>;
export const UpdateAssigneeDocument = gql`
    mutation UpdateAssignee($_eq: Int!, $assigneeId: Int!) {
  update_Task(where: {id: {_eq: $_eq}}, _set: {assigneeId: $assigneeId}) {
    affected_rows
    returning {
      assigneeId
      id
    }
  }
}
    `;
export type UpdateAssigneeMutationFn = Apollo.MutationFunction<Types.UpdateAssigneeMutation, Types.UpdateAssigneeMutationVariables>;

/**
 * __useUpdateAssigneeMutation__
 *
 * To run a mutation, you first call `useUpdateAssigneeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAssigneeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAssigneeMutation, { data, loading, error }] = useUpdateAssigneeMutation({
 *   variables: {
 *      _eq: // value for '_eq'
 *      assigneeId: // value for 'assigneeId'
 *   },
 * });
 */
export function useUpdateAssigneeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.UpdateAssigneeMutation, Types.UpdateAssigneeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.UpdateAssigneeMutation, Types.UpdateAssigneeMutationVariables>(UpdateAssigneeDocument, options);
      }
export type UpdateAssigneeMutationHookResult = ReturnType<typeof useUpdateAssigneeMutation>;
export type UpdateAssigneeMutationResult = Apollo.MutationResult<Types.UpdateAssigneeMutation>;
export type UpdateAssigneeMutationOptions = Apollo.BaseMutationOptions<Types.UpdateAssigneeMutation, Types.UpdateAssigneeMutationVariables>;
export const GetTaskDefinitionDocument = gql`
    query GetTaskDefinition {
  TaskDefinition_connection(where: {parentId: {_is_null: true}}) {
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

/**
 * __useGetTaskDefinitionQuery__
 *
 * To run a query within a React component, call `useGetTaskDefinitionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTaskDefinitionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTaskDefinitionQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTaskDefinitionQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Types.GetTaskDefinitionQuery, Types.GetTaskDefinitionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetTaskDefinitionQuery, Types.GetTaskDefinitionQueryVariables>(GetTaskDefinitionDocument, options);
      }
export function useGetTaskDefinitionLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetTaskDefinitionQuery, Types.GetTaskDefinitionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetTaskDefinitionQuery, Types.GetTaskDefinitionQueryVariables>(GetTaskDefinitionDocument, options);
        }
export type GetTaskDefinitionQueryHookResult = ReturnType<typeof useGetTaskDefinitionQuery>;
export type GetTaskDefinitionLazyQueryHookResult = ReturnType<typeof useGetTaskDefinitionLazyQuery>;
export type GetTaskDefinitionQueryResult = Apollo.QueryResult<Types.GetTaskDefinitionQuery, Types.GetTaskDefinitionQueryVariables>;
export const GetFormSchemaDocument = gql`
    query GetFormSchema($id: ID!) {
  node(id: $id) {
    ...FormFragment
  }
}
    ${FormFragmentFragmentDoc}`;

/**
 * __useGetFormSchemaQuery__
 *
 * To run a query within a React component, call `useGetFormSchemaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFormSchemaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFormSchemaQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetFormSchemaQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.GetFormSchemaQuery, Types.GetFormSchemaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetFormSchemaQuery, Types.GetFormSchemaQueryVariables>(GetFormSchemaDocument, options);
      }
export function useGetFormSchemaLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetFormSchemaQuery, Types.GetFormSchemaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetFormSchemaQuery, Types.GetFormSchemaQueryVariables>(GetFormSchemaDocument, options);
        }
export type GetFormSchemaQueryHookResult = ReturnType<typeof useGetFormSchemaQuery>;
export type GetFormSchemaLazyQueryHookResult = ReturnType<typeof useGetFormSchemaLazyQuery>;
export type GetFormSchemaQueryResult = Apollo.QueryResult<Types.GetFormSchemaQuery, Types.GetFormSchemaQueryVariables>;
export const GetResourceDocument = gql`
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

/**
 * __useGetResourceQuery__
 *
 * To run a query within a React component, call `useGetResourceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetResourceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetResourceQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetResourceQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Types.GetResourceQuery, Types.GetResourceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetResourceQuery, Types.GetResourceQueryVariables>(GetResourceDocument, options);
      }
export function useGetResourceLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetResourceQuery, Types.GetResourceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetResourceQuery, Types.GetResourceQueryVariables>(GetResourceDocument, options);
        }
export type GetResourceQueryHookResult = ReturnType<typeof useGetResourceQuery>;
export type GetResourceLazyQueryHookResult = ReturnType<typeof useGetResourceLazyQuery>;
export type GetResourceQueryResult = Apollo.QueryResult<Types.GetResourceQuery, Types.GetResourceQueryVariables>;
export const GetResourceItemsDocument = gql`
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
    ${ResourceItemFragmentFragmentDoc}`;

/**
 * __useGetResourceItemsQuery__
 *
 * To run a query within a React component, call `useGetResourceItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetResourceItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetResourceItemsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetResourceItemsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Types.GetResourceItemsQuery, Types.GetResourceItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetResourceItemsQuery, Types.GetResourceItemsQueryVariables>(GetResourceItemsDocument, options);
      }
export function useGetResourceItemsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetResourceItemsQuery, Types.GetResourceItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetResourceItemsQuery, Types.GetResourceItemsQueryVariables>(GetResourceItemsDocument, options);
        }
export type GetResourceItemsQueryHookResult = ReturnType<typeof useGetResourceItemsQuery>;
export type GetResourceItemsLazyQueryHookResult = ReturnType<typeof useGetResourceItemsLazyQuery>;
export type GetResourceItemsQueryResult = Apollo.QueryResult<Types.GetResourceItemsQuery, Types.GetResourceItemsQueryVariables>;
export const GetTasksDocument = gql`
    query GetTasks($first: Int, $last: Int, $after: String, $before: String) {
  Task_connection(
    where: {parentId: {_is_null: true}}
    first: $first
    after: $after
    before: $before
    last: $last
    order_by: {createdAt: desc}
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

/**
 * __useGetTasksQuery__
 *
 * To run a query within a React component, call `useGetTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTasksQuery({
 *   variables: {
 *      first: // value for 'first'
 *      last: // value for 'last'
 *      after: // value for 'after'
 *      before: // value for 'before'
 *   },
 * });
 */
export function useGetTasksQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Types.GetTasksQuery, Types.GetTasksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetTasksQuery, Types.GetTasksQueryVariables>(GetTasksDocument, options);
      }
export function useGetTasksLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetTasksQuery, Types.GetTasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetTasksQuery, Types.GetTasksQueryVariables>(GetTasksDocument, options);
        }
export type GetTasksQueryHookResult = ReturnType<typeof useGetTasksQuery>;
export type GetTasksLazyQueryHookResult = ReturnType<typeof useGetTasksLazyQuery>;
export type GetTasksQueryResult = Apollo.QueryResult<Types.GetTasksQuery, Types.GetTasksQueryVariables>;
export const TaskByPkDocument = gql`
    query TaskByPk($id: ID!) {
  node(id: $id) {
    ...TaskDetailFragment
  }
}
    ${TaskDetailFragmentFragmentDoc}`;

/**
 * __useTaskByPkQuery__
 *
 * To run a query within a React component, call `useTaskByPkQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaskByPkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskByPkQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTaskByPkQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.TaskByPkQuery, Types.TaskByPkQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.TaskByPkQuery, Types.TaskByPkQueryVariables>(TaskByPkDocument, options);
      }
export function useTaskByPkLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.TaskByPkQuery, Types.TaskByPkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.TaskByPkQuery, Types.TaskByPkQueryVariables>(TaskByPkDocument, options);
        }
export type TaskByPkQueryHookResult = ReturnType<typeof useTaskByPkQuery>;
export type TaskByPkLazyQueryHookResult = ReturnType<typeof useTaskByPkLazyQuery>;
export type TaskByPkQueryResult = Apollo.QueryResult<Types.TaskByPkQuery, Types.TaskByPkQueryVariables>;
export const GetCommentDocument = gql`
    query GetComment($taskId: Int!) {
  Comment_connection(where: {taskId: {_eq: $taskId}}) {
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

/**
 * __useGetCommentQuery__
 *
 * To run a query within a React component, call `useGetCommentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommentQuery({
 *   variables: {
 *      taskId: // value for 'taskId'
 *   },
 * });
 */
export function useGetCommentQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.GetCommentQuery, Types.GetCommentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetCommentQuery, Types.GetCommentQueryVariables>(GetCommentDocument, options);
      }
export function useGetCommentLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetCommentQuery, Types.GetCommentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetCommentQuery, Types.GetCommentQueryVariables>(GetCommentDocument, options);
        }
export type GetCommentQueryHookResult = ReturnType<typeof useGetCommentQuery>;
export type GetCommentLazyQueryHookResult = ReturnType<typeof useGetCommentLazyQuery>;
export type GetCommentQueryResult = Apollo.QueryResult<Types.GetCommentQuery, Types.GetCommentQueryVariables>;
export const GetMyTasksDocument = gql`
    query GetMyTasks($id: Int!, $after: String, $before: String, $first: Int, $last: Int, $state: String, $status: String) {
  Task_connection(
    where: {Tasks: {_or: [{assigneeId: {_eq: $id}}, {creatorId: {_eq: $id}}]}, state: {_regex: $state}, status: {_regex: $status}}
    after: $after
    before: $before
    first: $first
    last: $last
    order_by: {createdAt: desc}
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

/**
 * __useGetMyTasksQuery__
 *
 * To run a query within a React component, call `useGetMyTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyTasksQuery({
 *   variables: {
 *      id: // value for 'id'
 *      after: // value for 'after'
 *      before: // value for 'before'
 *      first: // value for 'first'
 *      last: // value for 'last'
 *      state: // value for 'state'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useGetMyTasksQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.GetMyTasksQuery, Types.GetMyTasksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetMyTasksQuery, Types.GetMyTasksQueryVariables>(GetMyTasksDocument, options);
      }
export function useGetMyTasksLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetMyTasksQuery, Types.GetMyTasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetMyTasksQuery, Types.GetMyTasksQueryVariables>(GetMyTasksDocument, options);
        }
export type GetMyTasksQueryHookResult = ReturnType<typeof useGetMyTasksQuery>;
export type GetMyTasksLazyQueryHookResult = ReturnType<typeof useGetMyTasksLazyQuery>;
export type GetMyTasksQueryResult = Apollo.QueryResult<Types.GetMyTasksQuery, Types.GetMyTasksQueryVariables>;
export const GetViewConfigDocument = gql`
    query GetViewConfig($code: String!) {
  TaskBoard_connection(where: {code: {_eq: $code}}) {
    edges {
      node {
        ...TaskBoardFragment
      }
    }
  }
}
    ${TaskBoardFragmentFragmentDoc}`;

/**
 * __useGetViewConfigQuery__
 *
 * To run a query within a React component, call `useGetViewConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetViewConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetViewConfigQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useGetViewConfigQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.GetViewConfigQuery, Types.GetViewConfigQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetViewConfigQuery, Types.GetViewConfigQueryVariables>(GetViewConfigDocument, options);
      }
export function useGetViewConfigLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetViewConfigQuery, Types.GetViewConfigQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetViewConfigQuery, Types.GetViewConfigQueryVariables>(GetViewConfigDocument, options);
        }
export type GetViewConfigQueryHookResult = ReturnType<typeof useGetViewConfigQuery>;
export type GetViewConfigLazyQueryHookResult = ReturnType<typeof useGetViewConfigLazyQuery>;
export type GetViewConfigQueryResult = Apollo.QueryResult<Types.GetViewConfigQuery, Types.GetViewConfigQueryVariables>;
export const GetTaskByBoardDocument = gql`
    query GetTaskByBoard($definitionId: Int!) {
  Task_connection(
    where: {parentId: {_is_null: true}, definitionId: {_eq: $definitionId}}
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

/**
 * __useGetTaskByBoardQuery__
 *
 * To run a query within a React component, call `useGetTaskByBoardQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTaskByBoardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTaskByBoardQuery({
 *   variables: {
 *      definitionId: // value for 'definitionId'
 *   },
 * });
 */
export function useGetTaskByBoardQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.GetTaskByBoardQuery, Types.GetTaskByBoardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetTaskByBoardQuery, Types.GetTaskByBoardQueryVariables>(GetTaskByBoardDocument, options);
      }
export function useGetTaskByBoardLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetTaskByBoardQuery, Types.GetTaskByBoardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetTaskByBoardQuery, Types.GetTaskByBoardQueryVariables>(GetTaskByBoardDocument, options);
        }
export type GetTaskByBoardQueryHookResult = ReturnType<typeof useGetTaskByBoardQuery>;
export type GetTaskByBoardLazyQueryHookResult = ReturnType<typeof useGetTaskByBoardLazyQuery>;
export type GetTaskByBoardQueryResult = Apollo.QueryResult<Types.GetTaskByBoardQuery, Types.GetTaskByBoardQueryVariables>;
export const GetUserDocument = gql`
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

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Types.GetUserQuery, Types.GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetUserQuery, Types.GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetUserQuery, Types.GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetUserQuery, Types.GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<Types.GetUserQuery, Types.GetUserQueryVariables>;
export const GetMyRequestTaskDocument = gql`
    query getMyRequestTask($id: Int!, $after: String, $before: String, $first: Int, $last: Int) {
  Task_connection(
    where: {Tasks: {creatorId: {_eq: $id}}}
    after: $after
    before: $before
    first: $first
    last: $last
    order_by: {createdAt: desc}
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

/**
 * __useGetMyRequestTaskQuery__
 *
 * To run a query within a React component, call `useGetMyRequestTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyRequestTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyRequestTaskQuery({
 *   variables: {
 *      id: // value for 'id'
 *      after: // value for 'after'
 *      before: // value for 'before'
 *      first: // value for 'first'
 *      last: // value for 'last'
 *   },
 * });
 */
export function useGetMyRequestTaskQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.GetMyRequestTaskQuery, Types.GetMyRequestTaskQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetMyRequestTaskQuery, Types.GetMyRequestTaskQueryVariables>(GetMyRequestTaskDocument, options);
      }
export function useGetMyRequestTaskLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetMyRequestTaskQuery, Types.GetMyRequestTaskQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetMyRequestTaskQuery, Types.GetMyRequestTaskQueryVariables>(GetMyRequestTaskDocument, options);
        }
export type GetMyRequestTaskQueryHookResult = ReturnType<typeof useGetMyRequestTaskQuery>;
export type GetMyRequestTaskLazyQueryHookResult = ReturnType<typeof useGetMyRequestTaskLazyQuery>;
export type GetMyRequestTaskQueryResult = Apollo.QueryResult<Types.GetMyRequestTaskQuery, Types.GetMyRequestTaskQueryVariables>;
export const GetMyParticipantTaskDocument = gql`
    query getMyParticipantTask($id: Int!, $after: String, $before: String, $first: Int, $last: Int) {
  Task_connection(
    where: {Tasks: {assigneeId: {_eq: $id}}}
    after: $after
    before: $before
    first: $first
    last: $last
    order_by: {createdAt: desc}
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

/**
 * __useGetMyParticipantTaskQuery__
 *
 * To run a query within a React component, call `useGetMyParticipantTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyParticipantTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyParticipantTaskQuery({
 *   variables: {
 *      id: // value for 'id'
 *      after: // value for 'after'
 *      before: // value for 'before'
 *      first: // value for 'first'
 *      last: // value for 'last'
 *   },
 * });
 */
export function useGetMyParticipantTaskQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.GetMyParticipantTaskQuery, Types.GetMyParticipantTaskQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.GetMyParticipantTaskQuery, Types.GetMyParticipantTaskQueryVariables>(GetMyParticipantTaskDocument, options);
      }
export function useGetMyParticipantTaskLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetMyParticipantTaskQuery, Types.GetMyParticipantTaskQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.GetMyParticipantTaskQuery, Types.GetMyParticipantTaskQueryVariables>(GetMyParticipantTaskDocument, options);
        }
export type GetMyParticipantTaskQueryHookResult = ReturnType<typeof useGetMyParticipantTaskQuery>;
export type GetMyParticipantTaskLazyQueryHookResult = ReturnType<typeof useGetMyParticipantTaskLazyQuery>;
export type GetMyParticipantTaskQueryResult = Apollo.QueryResult<Types.GetMyParticipantTaskQuery, Types.GetMyParticipantTaskQueryVariables>;