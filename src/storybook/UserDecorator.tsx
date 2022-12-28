import { UserContext } from "@saleor/auth";
import React from "react";

export const UserDecorator = (user: any) => storyFn => (
  <UserContext.Provider
    value={{
      login: undefined,
      requestLoginByExternalPlugin: undefined,
      loginByExternalPlugin: undefined,
      logout: undefined,
      user,
      authenticated: false,
      authenticating: false,
      errors: [],
    }}
  >
    {storyFn()}
  </UserContext.Provider>
);
export default UserDecorator;
