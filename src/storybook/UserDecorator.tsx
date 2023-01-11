import { UserContext } from "@saleor/auth";
import React from "react";

export const UserDecorator = (user: any) => storyFn => (
  <UserContext.Provider
    value={{
      login: undefined,
      loginWithGoogle: undefined,
      requestLoginByExternalPlugin: undefined,
      loginByExternalPlugin: undefined,
      logout: undefined,
      user,
      refeshUser: undefined,
      authenticated: false,
      authenticating: false,
      errors: [],
    }}
  >
    {storyFn()}
  </UserContext.Provider>
);
export default UserDecorator;
