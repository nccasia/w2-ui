import { useUserByPkLazyQuery } from "@saleor/graphql";
import useLocalStorage from "@saleor/hooks/useLocalStorage";
import { createRelayId } from "@saleor/utils/createRelayId";
import { useEffect, useMemo, useState } from "react";

export const useAuthState = () => {
  const [userId, setUserId] = useState(null);
  const [userToken] = useLocalStorage("userToken", null);
  const [getUser, { data, loading, refetch }] = useUserByPkLazyQuery();
  const relayId = createRelayId([1, "public", "User", userId?.id]);

  const user = useMemo(() => {
    return {
      ...data?.node,
      userId: userId?.id,
    };
  }, [data?.node, userId?.id]);

  const authenticated = useMemo(() => {
    return !!user;
  }, [user]);
  const authenticating = useMemo(() => {
    return loading;
  }, [loading]);

  useEffect(() => {
    if (userToken) {
      getUser({
        variables: {
          id: createRelayId([1, "public", "User", userToken]),
        },
      });
    } else {
      getUser({
        variables: {
          id: relayId,
        },
      });
    }
  }, [getUser, relayId, userId, userToken]);

  return { authenticated, authenticating, user, setUserId, refetch };
};
