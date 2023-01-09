import { useUserByPkLazyQuery } from "@saleor/graphql";
import { useEffect, useMemo, useState } from "react";

export const useAuthState = () => {
  const [userId, setUserId] = useState(null);
  const [getUser, { data, loading }] = useUserByPkLazyQuery();

  const user = useMemo(() => {
    return data.User_by_pk;
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
        id: userId.id,
      },
    });
  }, [getUser, userId]);

  return { authenticated, authenticating, user, setUserId };
};
