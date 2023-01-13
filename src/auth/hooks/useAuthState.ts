import { useUserByPkLazyQuery } from "@saleor/graphql";
import { createRelayId } from "@saleor/utils/createRelayId";
import { useEffect, useMemo, useState } from "react";

export const useAuthState = () => {
  const [userId, setUserId] = useState(null);
  const [getUser, { data, loading, refetch }] = useUserByPkLazyQuery();
  const relayId = createRelayId([1, "public", "User", userId?.id]);

  const user = useMemo(() => {
    return data?.node;
  }, [data]);

  const authenticated = useMemo(() => {
    return !!user;
  }, [user]);
  const authenticating = useMemo(() => {
    return loading;
  }, [loading]);

  useEffect(() => {
    getUser({
      variables: {
        id: relayId,
      },
    });
  }, [getUser, relayId, userId]);

  return { authenticated, authenticating, user, setUserId, refetch };
};
