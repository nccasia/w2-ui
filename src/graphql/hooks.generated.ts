/* eslint-disable */
import * as Types from './types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@saleor/hooks/graphql';
const defaultOptions = {} as const;
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
export const UserByPkDocument = gql`
    query UserByPk($id: ID!) {
  node(id: $id) {
    ... on User {
      id
      email
      role
      lastname
      firstname
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
export const CreateTaskDocument = gql`
    mutation CreateTask($values: jsonb = "", $definitionId: Int!, $creatorId: Int!, $assigneeId: Int!, $organizationId: Int!, $teamId: Int!, $dueDate: timestamp!, $title: String!) {
  insert_Task(
    objects: {values: $values, description: "default", creatorId: $creatorId, assigneeId: $assigneeId, title: $title, definitionId: $definitionId, dueDate: $dueDate, organizationId: $organizationId, teamId: $teamId}
  ) {
    returning {
      id
    }
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
 *      values: // value for 'values'
 *      definitionId: // value for 'definitionId'
 *      creatorId: // value for 'creatorId'
 *      assigneeId: // value for 'assigneeId'
 *      organizationId: // value for 'organizationId'
 *      teamId: // value for 'teamId'
 *      dueDate: // value for 'dueDate'
 *      title: // value for 'title'
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
export const GetEventLogsDocument = gql`
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
export const GetTaskDefinitionDocument = gql`
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
    ... on Form {
      id
      name
      schema
      code
    }
  }
}
    `;

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
    ${TaskFragmentFragmentDoc}`;

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
 *   },
 * });
 */
export function useGetCommentQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Types.GetCommentQuery, Types.GetCommentQueryVariables>) {
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