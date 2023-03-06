import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import useRouter from "use-react-router";

import appStateReducer, { AppStateReducerAction } from "./reducer";
import IAppState, { initialAppState } from "./state";

const GOOGLE_CLIENT_ID =
  window.__APP_CONFIG__.GOOGLE_CLIENT_ID ||
  "63748869594-f5mhd82rc1ft4okk2q2v3ulhar66d3b0.apps.googleusercontent.com";

export type AppStateContextType = [
  IAppState,
  React.Dispatch<AppStateReducerAction>,
];
export const AppStateContext = React.createContext<AppStateContextType>([
  initialAppState,
  () => undefined,
]);
const AppStateProvider: React.FC = ({ children }) => {
  const { location } = useRouter();
  const stateAndDispatch = React.useReducer(appStateReducer, initialAppState);
  const [state, dispatch] = stateAndDispatch;

  React.useEffect(() => {
    if (!!state.error) {
      dispatch({
        payload: {
          error: undefined,
        },
        type: "displayError",
      });
    }
  }, [location]);

  return (
    <AppStateContext.Provider value={stateAndDispatch}>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        {children}
      </GoogleOAuthProvider>
    </AppStateContext.Provider>
  );
};

export const { Consumer } = AppStateContext;

export default AppStateProvider;
