import { useEffect, useState } from "react";

export const useAuthState = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [authenticating] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setAuthenticated(user ? true : false);
  }, [user]);

  return { authenticated, authenticating, user, setUser };
};
