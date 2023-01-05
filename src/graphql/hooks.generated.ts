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
      email
      firstname
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