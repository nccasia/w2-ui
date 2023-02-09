import {
  GoogleLoginInput,
  useGoogleLoginMutation,
  useSigninMutation,
} from "@saleor/graphql";

export const useAuth = () => {
  const [loginMutation] = useSigninMutation();
  const [loginGoogleMutation] = useGoogleLoginMutation();
  const login = async ({ password, email }) => {
    const result = await loginMutation({
      variables: {
        email,
        password,
      },
    });
    return result;
  };

  const loginGoogle = async (data: GoogleLoginInput) => {
    const result = await loginGoogleMutation({
      variables: { data },
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
    loginGoogle,
    login,
    getExternalAuthUrl,
    getExternalAccessToken,
    logout,
  };
};
