import { Avatar, Box, makeStyles, Popper, Typography } from "@material-ui/core";
import { useGetInformationUserQuery } from "@saleor/graphql";
import { createRelayId } from "@saleor/utils/createRelayId";
import React from "react";

interface CustomAvatarProps {
  id?: number;
}
const useStyles = makeStyles(
  () => ({
    profileUser: {
      display: "flex",
      alignItems: "center",
      padding: "8px 12px",
      boxShadow: "0 0 3px 1px #888",
    },
  }),
  { name: "FormCreatedTaskDetail" },
);

const CustomAvatar = ({ id }: CustomAvatarProps): JSX.Element => {
  const classes = useStyles();
  const userId = createRelayId([1, "public", "User", id]);
  const { data } = useGetInformationUserQuery({
    variables: {
      id: userId,
    },
  });
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id2 = open ? "simple-popper" : undefined;

  return (
    <div>
      {data?.node && (
        <>
          <Avatar
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/%ED%88%AC%EB%AA%85%ED%95%9C_%ED%94%BC%EB%B6%80%EB%A5%BC_%EC%9C%A0%EC%A7%80%ED%95%98%EB%8A%94_%EC%9C%A4%EC%95%84%28YOONA%29%EC%9D%98_%ED%94%BC%EB%B6%80_%EA%B4%80%EB%A6%AC_%EB%B9%84%EA%B2%B0%EC%9D%80_%281%29.jpg"
            onClick={handleClick}
            aria-describedby={id2}
          />
          <Popper id={id2} open={open} anchorEl={anchorEl}>
            <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
              <div className={classes.profileUser}>
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
                      {`${data?.node?.lastname} ${data?.node?.firstname}`}
                    </b>
                    <span>
                      {/* @ts-ignore */}
                      Email: {data?.node?.email}
                    </span>
                  </Typography>
                </Box>
              </div>
            </Box>
          </Popper>
        </>
      )}
    </div>
  );
};

export default CustomAvatar;
