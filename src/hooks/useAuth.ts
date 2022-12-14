export const useAuth = () => {
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const login = async ({ password, email, includeDetails }) => {
    // do some dummy authentication process here
    const authenticated = true;
    if (authenticated) {
      return { data: null };
    } else {
      return { authenticated: false, error: "Invalid login credentials" };
    }
  };

  const getExternalAuthUrl = () => ({
    data: {
      externalAuthenticationUrl: "https://example.com/external-auth",
    },
  });

  const getExternalAccessToken = () =>
    // get dummy external access token here using the auth code
    ({ data: null });

  const logout = () =>
    // do some dummy logout process here
    true;

  return {
    login,
    getExternalAuthUrl,
    getExternalAccessToken,
    logout,
  };
};
