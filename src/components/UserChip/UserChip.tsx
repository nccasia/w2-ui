import {
  Avatar,
  Box,
  FormControlLabel,
  Switch,
  Typography,
} from "@material-ui/core";
import { UserChipMenu, UserChipMenuItem } from "@saleor/macaw-ui";
import { getUserInitials, getUserName } from "@saleor/misc";
import { staffMemberDetailsUrl } from "@saleor/staff/urls";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Link } from "react-router-dom";

export interface UserChipProps {
  isDarkThemeEnabled?: boolean;
  user: any;
  onLogout?: () => void;
  onThemeToggle?: () => void;
}

const UserChip: React.FC<UserChipProps> = ({
  isDarkThemeEnabled,
  user,
  onLogout,
  onThemeToggle,
}) => {
  const intl = useIntl();

  return (
    <UserChipMenu
      initials={getUserInitials(user)}
      name={getUserName(user, true)}
      avatar={user?.avatar?.url}
    >
      {!onLogout ? (
        <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 12px",
            }}
          >
            <Avatar
              src="https://upload.wikimedia.org/wikipedia/commons/e/e1/%ED%88%AC%EB%AA%85%ED%95%9C_%ED%94%BC%EB%B6%80%EB%A5%BC_%EC%9C%A0%EC%A7%80%ED%95%98%EB%8A%94_%EC%9C%A4%EC%95%84%28YOONA%29%EC%9D%98_%ED%94%BC%EB%B6%80_%EA%B4%80%EB%A6%AC_%EB%B9%84%EA%B2%B0%EC%9D%80_%281%29.jpg"
              sizes="xl"
            />
            <Box>
              <Typography
                style={{
                  padding: "0px 10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <b>
                  {/* @ts-ignore */}
                  {`${user.lastname} ${user.firstname}`}
                </b>
                <span>
                  {/* @ts-ignore */}
                  Email: {user.email}
                </span>
              </Typography>
            </Box>
          </div>
        </Box>
      ) : (
        <>
          <UserChipMenuItem data-test-id="account-settings-button">
            <Link to={staffMemberDetailsUrl(user?.id)}>
              <FormattedMessage
                id="X8+Lpa"
                defaultMessage="Account Settings"
                description="button"
              />
            </Link>
          </UserChipMenuItem>
          <UserChipMenuItem onClick={onLogout} data-test-id="log-out-button">
            <FormattedMessage
              id="qLbse5"
              defaultMessage="Log out"
              description="button"
            />
          </UserChipMenuItem>
          <UserChipMenuItem
            leaveOpen
            data-test-id="theme-switch"
            data-test-is-dark={isDarkThemeEnabled}
          >
            <FormControlLabel
              control={<Switch checked={isDarkThemeEnabled} disableRipple />}
              label={intl.formatMessage({
                id: "2r4cTE",
                defaultMessage: "Enable Dark Mode",
                description: "button",
              })}
              onChange={onThemeToggle}
            />
          </UserChipMenuItem>
        </>
      )}
    </UserChipMenu>
  );
};
UserChip.displayName = "UserChip";
export default UserChip;
