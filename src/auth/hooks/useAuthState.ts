import { useEffect, useState } from "react";

export const useAuthState = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [authenticating, setAuthenticating] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuthStatus = async () => {
      setAuthenticating(true);
      // do some dummy check for authenticated status here
      const authenticated = true;
      if (authenticated) {
        setAuthenticated(true);
        // get dummy user data here
        setUser({ username: "dummy-user" });
      } else {
        setAuthenticated(false);
        setUser(null);
      }
      setAuthenticating(false);
    };
    checkAuthStatus();
  }, []);

  return { authenticated, authenticating, user };
};
