import {
  ApolloError,
  ApolloQueryResult,
  LazyQueryHookOptions as BaseLazyQueryHookOptions,
  OperationVariables,
  QueryHookOptions as BaseQueryHookOptions,
  QueryResult,
  useQuery as useBaseQuery,
} from "@apollo/client";
import { handleQueryAuthError, useUser } from "@saleor/auth";
import { RequireAtLeastOne } from "@saleor/misc";
import { DocumentNode } from "graphql";
import { useEffect } from "react";
import { useIntl } from "react-intl";

import useAppState from "./useAppState";
import useNotifier from "./useNotifier";
export { useLazyQuery } from "@apollo/client";

export const allPermissions: Record<any, boolean> = {};

const getUserPermissions = (): Record<any, boolean> => ({});

export interface LoadMore<TData, TVariables> {
  loadMore: (
    mergeFunc: (prev: TData, next: TData) => TData,
    extraVariables: Partial<TVariables>,
  ) => Promise<ApolloQueryResult<TData>>;
}

export type LazyQueryHookOptions<
  TData = any,
  TVariables = OperationVariables
> = BaseLazyQueryHookOptions<TData, TVariables>;

export type UseQueryResult<TData, TVariables> = QueryResult<TData, TVariables> &
  LoadMore<TData, TVariables>;
export type QueryHookOptions<TData, TVariables> = Partial<
  Omit<BaseQueryHookOptions<TData, TVariables>, "variables"> & {
    displayLoader: boolean;
    handleError?: (error: ApolloError) => void | undefined;
    variables?: Omit<TVariables, any>;
  }
>;

type UseQueryHook<TData, TVariables> = (
  opts?: QueryHookOptions<TData, Omit<TVariables, any>>,
) => UseQueryResult<TData, TVariables>;

export function useQuery<TData, TVariables>(
  query: DocumentNode,
  {
    displayLoader,
    skip,
    variables,
    fetchPolicy,
    handleError,
    ...opts
  }: QueryHookOptions<TData, TVariables> = {},
): UseQueryResult<TData, TVariables> {
  const notify = useNotifier();
  const intl = useIntl();
  const [, dispatchAppState] = useAppState();
  const user = useUser();
  const userPermissions = getUserPermissions();

  const variablesWithPermissions = {
    ...variables,
    ...allPermissions,
    ...userPermissions,
  } as TVariables & Record<any, boolean>;

  const queryData = useBaseQuery(query, {
    ...opts,
    context: {
      useBatching: true,
    },
    errorPolicy: "all",
    fetchPolicy: fetchPolicy ?? "cache-and-network",
    onError: error => {
      if (!!handleError) {
        handleError(error);
      } else {
        handleQueryAuthError(error, notify, user.logout, intl);
      }
    },
    skip,
    variables: variablesWithPermissions,
  });

  useEffect(() => {
    if (displayLoader) {
      dispatchAppState({
        payload: {
          value: queryData.loading,
        },
        type: "displayLoader",
      });
    }
  }, [queryData.loading]);

  const loadMore = (
    mergeFunc: (previousResults: TData, fetchMoreResult: TData) => TData,
    extraVariables: RequireAtLeastOne<TVariables>,
  ) =>
    queryData.fetchMore({
      query,
      updateQuery: (previousResults, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return previousResults;
        }
        return mergeFunc(previousResults, fetchMoreResult);
      },
      variables: { ...variablesWithPermissions, ...extraVariables },
    });

  return {
    ...queryData,
    loadMore,
  };
}

function makeQuery<TData, TVariables>(
  query: DocumentNode,
): UseQueryHook<TData, TVariables> {
  return (opts: QueryHookOptions<TData, TVariables>) =>
    useQuery<TData, TVariables>(query, opts);
}

export default makeQuery;
