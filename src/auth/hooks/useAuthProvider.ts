import { ApolloClient, ApolloError } from "@apollo/client";
import { useAuth } from "@saleor/auth/hooks/useAuth";
import { IMessageContext } from "@saleor/components/messages";
import { DEMO_MODE } from "@saleor/config";
import { Rolebe } from "@saleor/graphql";
import useLocalStorage from "@saleor/hooks/useLocalStorage";
import useNavigator from "@saleor/hooks/useNavigator";
import { commonMessages } from "@saleor/intl";
import {
  isSupported as isCredentialsManagementAPISupported,
  login as loginWithCredentialsManagementAPI,
  saveCredentials,
} from "@saleor/utils/credentialsManagement";
import { getAppMountUriForRedirect } from "@saleor/utils/urls";
import { useEffect, useRef, useState } from "react";
import { IntlShape } from "react-intl";
import urlJoin from "url-join";

import { parseAuthError } from "../errors";
import { UserContext, UserContextError } from "../types";
import { displayDemoMessage } from "../utils";
import { useAuthState } from "./useAuthState";

export interface UseAuthProviderOpts {
  intl: IntlShape;
  notify: IMessageContext;
  apolloClient: ApolloClient<any>;
}

export function useAuthProvider({
  intl,
  notify,
  apolloClient,
}: UseAuthProviderOpts): UserContext {
  const {
    login,
    loginWithGoogle,
    getExternalAuthUrl,
    // getExternalAccessToken,
    logout,
  } = useAuth();
  const navigate = useNavigator();
  const { authenticated, authenticating, user, setUser } = useAuthState();
  const [requestedExternalPluginId] = useLocalStorage(
    "requestedExternalPluginId",
    null,
  );
  const [errors, setErrors] = useState<UserContextError[]>([]);
  const permitCredentialsAPI = useRef(true);

  useEffect(() => {
    if (authenticating && errors.length) {
      setErrors([]);
    }
  }, [authenticating, errors.length]);

  useEffect(() => {
    if (authenticated) {
      permitCredentialsAPI.current = true;
    }
  }, [authenticated]);

  useEffect(() => {
    if (
      !authenticated &&
      !authenticating &&
      !requestedExternalPluginId &&
      permitCredentialsAPI.current
    ) {
      permitCredentialsAPI.current = false;
      loginWithCredentialsManagementAPI(handleLogin);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authenticated, authenticating]);

  const handleLoginError = (error: ApolloError) => {
    const parsedErrors = parseAuthError(error);

    if (parsedErrors.length) {
      setErrors(parsedErrors);
    } else {
      setErrors(["unknownLoginError"]);
    }
  };

  const handleLogout = async () => {
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const returnTo = urlJoin(
      window.location.origin,
      getAppMountUriForRedirect(),
    );

    const result = await logout();

    if (isCredentialsManagementAPISupported) {
      navigator.credentials.preventSilentAccess();
    }

    // Forget last logged in user data.
    // On next login, user details query will be refetched due to cache-and-network fetch policy.
    apolloClient.clearStore();
    // @ts-ignore
    const errors = result?.errors || [];

    const externalLogoutUrl = result
      ? // @ts-ignore
        JSON.parse(result.data?.externalLogout?.logoutData || null)?.logoutUrl
      : "";

    if (!errors.length) {
      if (externalLogoutUrl) {
        window.location.href = externalLogoutUrl;
      } else {
        navigate("/");
      }
    }

    // TODO: fetch data logout
    setUser(null);

    return;
  };

  const handleLogin = async (email: string, password: string) => {
    try {
      const result = await login({
        email,
        password,
      });

      if (result && !result.errors) {
        if (DEMO_MODE) {
          displayDemoMessage(intl, notify);
        }
        saveCredentials(result.data.login.user, password);
      } else {
        setErrors(["loginError"]);
      }

      await logoutNonStaffUser(result.data.login.accessToken);

      setUser(result.data.login.user);

      return result.data.login.user;
    } catch (error) {
      handleLoginError(error);
    }
  };
  const handleLoginWithGoogle = async (googleId: string) => {
    try {
      const result = await loginWithGoogle(googleId);
      if (result && !result.data.tokenCreate.errors.length) {
        if (DEMO_MODE) {
          displayDemoMessage(intl, notify);
        }
        // eslint-disable-next-line no-console
        console.log("user--->>>", result.data.tokenCreate.user);
        saveCredentials(result.data.tokenCreate.user, "111111");
      } else {
        setErrors(["loginError"]);
      }
      await logoutNonStaffUser(result.data.tokenCreate);

      setUser(result.data.tokenCreate.user);

      return result.data.tokenCreate.user;
    } catch (error) {
      handleLoginError(error);
    }
  };
  const handleRequestExternalLogin = async (_pluginId: string, _input: any) => {
    const result = await getExternalAuthUrl();

    return result?.data?.externalAuthenticationUrl;
  };
  const handleExternalLogin = async (_pluginId: string, _input: any) => {
    try {
      const result = null;

      if (result && !result.data?.externalObtainAccessTokens.errors.length) {
        if (DEMO_MODE) {
          displayDemoMessage(intl, notify);
        }
      } else {
        setErrors(["externalLoginError"]);
      }

      await logoutNonStaffUser(result.data.externalObtainAccessTokens);

      return result?.data?.externalObtainAccessTokens;
    } catch (error) {
      handleLoginError(error);
    }
  };

  const logoutNonStaffUser = async (data: any) => {
    if (data.user && data.user.role === Rolebe.USER) {
      notify({
        status: "error",
        text: intl.formatMessage(commonMessages.unauthorizedDashboardAccess),
        title: intl.formatMessage(commonMessages.insufficientPermissions),
      });
      await handleLogout();
    }
  };

  return {
    login: handleLogin,
    loginWithGoogle: handleLoginWithGoogle,
    // @ts-ignore
    requestLoginByExternalPlugin: handleRequestExternalLogin,
    loginByExternalPlugin: handleExternalLogin,
    logout: handleLogout,
    authenticating: authenticating && !errors.length,
    authenticated: authenticated && user?.role === Rolebe.USER,
    user,
    errors,
    setUser,
  };
}
