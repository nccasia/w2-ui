import { useLoginMutation } from "@saleor/graphql";

export const useAuth = () => {
  const [loginMutation] = useLoginMutation();
  const login = async ({ password, email }) => {
    const result = await loginMutation({
      variables: {
        email,
        password,
      },
    });
    return result;
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
