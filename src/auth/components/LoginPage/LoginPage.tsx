import {
  CircularProgress,
  Divider,
  TextField,
  Typography,
} from "@material-ui/core";
import { useUser } from "@saleor/auth";
import { UserContextError } from "@saleor/auth/types";
import { passwordResetUrl, signUpResetUrl } from "@saleor/auth/urls";
import { Button } from "@saleor/components/Button";
import { FormSpacer } from "@saleor/components/FormSpacer";
import { SubmitPromise } from "@saleor/hooks/useForm";
import { commonMessages } from "@saleor/intl";
import { EyeIcon, IconButton } from "@saleor/macaw-ui";
import { gapi } from "gapi-script";
import React, { useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { FormattedMessage, useIntl } from "react-intl";
import { Link } from "react-router-dom";

import useStyles from "../styles";
import LoginForm, { LoginFormData } from "./form";
import { getErrorMessage } from "./messages";

export interface LoginCardProps {
  errors: UserContextError[];
  disabled: boolean;
  loading: boolean;
  externalAuthentications?: any;
  onExternalAuthentication: (pluginId: string) => void;
  onSubmit?: (event: LoginFormData) => SubmitPromise;
}

const LoginCard: React.FC<LoginCardProps> = props => {
  const {
    errors,
    disabled,
    loading,
    externalAuthentications = [],
    onExternalAuthentication,
    onSubmit,
  } = props;
  const clientId =
    "297834965215-lcf3u4r5cb0psirejjulvne91fqgiha8.apps.googleusercontent.com";
  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.client.init({ clientId });
    });
  }, []);
  const { loginWithGoogle } = useUser();

  const classes = useStyles(props);
  const intl = useIntl();
  const [showPassword, setShowPassword] = React.useState(false);

  if (loading) {
    return (
      <div className={classes.loading}>
        <CircularProgress size={128} />
      </div>
    );
  }

  const responseGoogle = response => {
    // eslint-disable-next-line no-console
    console.log("success->", response);

    loginWithGoogle(response.googleId);
  };
  const responseGoogleFail = response => {
    // eslint-disable-next-line no-console
    console.log("fail->", response);
  };

  return (
    <LoginForm onSubmit={onSubmit}>
      {({ change: handleChange, data, submit }) => (
        <>
          <Typography variant="h3" className={classes.header}>
            <FormattedMessage
              id="vzgZ3U"
              defaultMessage="Sign In"
              description="card header"
            />
          </Typography>
          {errors.map(error => (
            <div
              className={classes.panel}
              key={error}
              data-test-id="login-error-message"
            >
              {getErrorMessage(error, intl)}
            </div>
          ))}
          <TextField
            autoFocus
            fullWidth
            autoComplete="username"
            label={intl.formatMessage(commonMessages.email)}
            name="email"
            onChange={handleChange}
            value={data.email}
            inputProps={{
              "data-test-id": "email",
              spellCheck: false,
            }}
            disabled={disabled}
          />
          <FormSpacer />
          <div className={classes.passwordWrapper}>
            <TextField
              fullWidth
              autoComplete="password"
              label={intl.formatMessage({
                id: "5sg7KC",
                defaultMessage: "Password",
              })}
              name="password"
              onChange={handleChange}
              type={showPassword ? "text" : "password"}
              value={data.password}
              inputProps={{
                "data-test-id": "password",
                spellCheck: false,
              }}
              disabled={disabled}
            />
            {/* Not using endAdornment as it looks weird with autocomplete */}
            <IconButton
              className={classes.showPasswordBtn}
              variant="ghost"
              hoverOutline={false}
              onMouseDown={() => setShowPassword(true)}
              onMouseUp={() => setShowPassword(false)}
            >
              <EyeIcon />
            </IconButton>
          </div>
          <div className={classes.option}>
            <Typography
              component={Link}
              className={classes.link}
              to={passwordResetUrl}
              variant="body2"
              data-test-id="reset-password-link"
            >
              <FormattedMessage
                id="3tbL7x"
                defaultMessage="Forgot password?"
                description="description"
              />
            </Typography>
            <Typography
              component={Link}
              className={classes.link}
              to={signUpResetUrl}
              variant="body2"
              data-test-id="signup"
            >
              <FormattedMessage
                id="7qIf/y"
                defaultMessage="Signup"
                description="description"
              />
            </Typography>
          </div>
          <div className={classes.buttonContainer}>
            <Button
              className={classes.loginButton}
              disabled={disabled}
              variant="primary"
              onClick={submit}
              type="submit"
              data-test-id="submit"
            >
              <FormattedMessage
                id="AubJ/S"
                defaultMessage="Sign in"
                description="button"
              />
            </Button>
          </div>
          <div className={classes.buttonContainer}>
            <GoogleLogin
              clientId={clientId}
              className={classes.googleLoginButton}
              buttonText="Login with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogleFail}
            />
          </div>
          {externalAuthentications.length > 0 && (
            <>
              <FormSpacer />
              <Divider />
              <FormSpacer />
              <Typography>
                <FormattedMessage
                  id="ENBELI"
                  defaultMessage="or login using"
                  description="description"
                />
              </Typography>
            </>
          )}
          {externalAuthentications.map(externalAuthentication => (
            <React.Fragment key={externalAuthentication.id}>
              <FormSpacer />
              <Button
                fullWidth
                variant="secondary"
                onClick={() =>
                  onExternalAuthentication(externalAuthentication.id)
                }
                data-test-id="external-authentication"
                disabled={disabled}
              >
                {externalAuthentication.name}
              </Button>
            </React.Fragment>
          ))}
        </>
      )}
    </LoginForm>
  );
};
LoginCard.displayName = "LoginCard";
export default LoginCard;
