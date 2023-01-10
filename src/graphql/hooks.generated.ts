/* eslint-disable */
import * as Types from './types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@saleor/hooks/graphql';
const defaultOptions = {} as const;

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
export const GetTasksDocument = gql`
    query getTasks {
  Task(limit: 10, offset: 0) {
    id
    priority
    status
    title
    assigneeId
    createdAt
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