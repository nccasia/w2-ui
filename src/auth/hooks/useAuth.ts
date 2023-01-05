export const useAuth = () => {
  const login = async ({ password, email, includeDetails }) => {
    // do some dummy authentication process here
    const authenticated = true;
    // fetch data backend
    if (authenticated) {
      return {
        data: {
          tokenCreate: {
            tokenId:
              "eyJhbGciOiJSUzI1NiIsImtpZCI6IjhlMGFjZjg5MWUwOTAwOTFlZjFhNWU3ZTY0YmFiMjgwZmQxNDQ3ZmEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMjk3ODM0OTY1MjE1LWxjZjN1NHI1Y2IwcHNpcm",
            user: {
              email,
              firstname: "doan cong tin",
              password,
              isStaff: "staff",
              includeDetails,
              userPermissions: [
                { code: "MANAGE_SETTINGS" },
                { code: "MANAGE_STAFF" },
                { code: "MANAGE_TRANSLATIONS" },
                { code: "MANAGE_TASKS" },
                { code: "MANAGE_CHANNELS" },
                { code: "MANAGE_PRODUCTS" },
              ],
            },
            errors: [],
          },
        },
      };
    } else {
      return { authenticated: false, error: "Invalid login credentials" };
    }
  };

  const loginWithGoogle = googleId => {
    // eslint-disable-next-line no-console
    console.log(googleId);
    return {
      data: {
        tokenCreate: {
          tokenId:
            "eyJhbGciOiJSUzI1NiIsImtpZCI6IjhlMGFjZjg5MWUwOTAwOTFlZjFhNWU3ZTY0YmFiMjgwZmQxNDQ3ZmEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMjk3ODM0OTY1MjE1LWxjZjN1NHI1Y2IwcHNpcm",
          user: {
            email: "tranhuuvinh1109@gmail.com",
            firstname: "doan cong tin",
            password: "11091109",
            isStaff: "staff",
            includeDetails: true,
            userPermissions: [
              { code: "MANAGE_SETTINGS" },
              { code: "MANAGE_STAFF" },
              { code: "MANAGE_TRANSLATIONS" },
              { code: "MANAGE_TASKS" },
              { code: "MANAGE_CHANNELS" },
              { code: "MANAGE_PRODUCTS" },
            ],
          },
          errors: [],
        },
      },
    };
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
    loginWithGoogle,
    login,
    getExternalAuthUrl,
    getExternalAccessToken,
    logout,
  };
};
