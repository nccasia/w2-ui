/* eslint-disable */
import * as Types from './types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@saleor/hooks/graphql';
const defaultOptions = {} as const;
export const TaskDefinitionFragmentFragmentDoc = gql`
    fragment TaskDefinitionFragment on TaskDefinition {
  id
  formId
  title
  titleTemplate
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
  teamId
  title
}
    `;
export const MyQueryDocument = gql`
    query MyQuery {
  hello(name: "world")
}
    `;

/**
 * __useMyQueryQuery__
 *
 * To run a query within a React component, call `useMyQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Types.MyQueryQuery, Types.MyQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.MyQueryQuery, Types.MyQueryQueryVariables>(MyQueryDocument, options);
      }
export function useMyQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.MyQueryQuery, Types.MyQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.MyQueryQuery, Types.MyQueryQueryVariables>(MyQueryDocument, options);
        }
export type MyQueryQueryHookResult = ReturnType<typeof useMyQueryQuery>;
export type MyQueryLazyQueryHookResult = ReturnType<typeof useMyQueryLazyQuery>;
export type MyQueryQueryResult = Apollo.QueryResult<Types.MyQueryQuery, Types.MyQueryQueryVariables>;
export const LoginDocument = gql`
    mutation Login($email: String = "", $password: String = "") {
  login(data: {email: $email, password: $password}) {
    user {
      id
      email
      firstname
      lastname
      role
      permissions {
        code
      }
    }
    accessToken
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<Types.LoginMutation, Types.LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.LoginMutation, Types.LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<Types.LoginMutation, Types.LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<Types.LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<Types.LoginMutation, Types.LoginMutationVariables>;
export const UserByPkDocument = gql`
    query UserByPk($id: Int!) {
  User_by_pk(id: $id) {
    id
    email
    role
    lastname
    firstname
    MemberOnTeams {
      teamId
      Team {
        id
        name
        description
        organizationId
      }
      userId
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
    query GetInformationUser($id: Int!) {
  User_by_pk(id: $id) {
    id
    email
    firstname
    lastname
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
export const UpdateInformationUserDocument = gql`
    mutation UpdateInformationUser($id: Int!, $firstname: String = "", $lastname: String = "") {
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
export const HomeDocument = gql`
    query Home {
  hello(name: "world")
}
    `;

/**
 * __useHomeQuery__
 *
 * To run a query within a React component, call `useHomeQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Types.HomeQuery, Types.HomeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Types.HomeQuery, Types.HomeQueryVariables>(HomeDocument, options);
      }
export function useHomeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.HomeQuery, Types.HomeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Types.HomeQuery, Types.HomeQueryVariables>(HomeDocument, options);
        }
export type HomeQueryHookResult = ReturnType<typeof useHomeQuery>;
export type HomeLazyQueryHookResult = ReturnType<typeof useHomeLazyQuery>;
export type HomeQueryResult = Apollo.QueryResult<Types.HomeQuery, Types.HomeQueryVariables>;
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
export const GetTaskDefinitionDocument = gql`
    query GetTaskDefinition {
  TaskDefinition(limit: 10, offset: 0) {
    ...TaskDefinitionFragment
  }
}
    ${TaskDefinitionFragmentFragmentDoc}`;

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
    query GetFormSchema($id: Int!) {
  Form_by_pk(id: $id) {
    id
    name
    schema
    code
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
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetResourceQuery(baseOptions: ApolloReactHooks.QueryHookOptions<Types.GetResourceQuery, Types.GetResourceQueryVariables>) {
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
export const GetTasksDocument = gql`
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
    query TaskByPk($id: Int!) {
  Task_by_pk(id: $id) {
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
export const GetEventLogsDocument = gql`
    query getEventLogs {
  EventLog(limit: 15) {
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