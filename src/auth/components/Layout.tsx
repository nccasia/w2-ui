// import backgroundArt from "@assets/images/login-background.svg";
// import saleorDarkLogo from "@assets/images/logo-dark.svg";
// import saleorLightLogo from "@assets/images/logo-light.svg";
import { makeStyles } from "@saleor/macaw-ui";
import React from "react";
// import InlineSVG from "react-inlinesvg";

const useStyles = makeStyles(
  theme => ({
    logo: {
      display: "block",
      width: "36px",
      marginBottom: theme.spacing(4),
    },
    mainPanel: {
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(2),
      },
      background: theme.palette.background.paper,
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      justifyContent: "center",
      padding: theme.spacing(5, 6, 4, 6),
      width: "100%",
    },
    mainPanelContent: {
      [theme.breakpoints.up("xs")]: {
        width: "100%",
      },
      [theme.breakpoints.up("sm")]: {
        width: 328,
      },
      "@media (min-width: 1440px)": {
        width: 380,
      },
      margin: "auto",
      width: "100%",
    },
    root: {
      [theme.breakpoints.up("lg")]: {
        gridTemplateColumns: "560px 1fr",
      },
      "@media (min-width: 1440px)": {
        gridTemplateColumns: "780px 1fr",
      },
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: theme.spacing(3),
      height: "100vh",
      overflow: "hidden",
      position: "relative",
      width: "100vw",
    },
    sidebar: {
      [theme.breakpoints.up("lg")]: {
        alignItems: "center",
        display: "flex",
      },
    },
    backgroundImg: {
      height: "100%",
    },
    sidebarArt: {
      "& svg": {
        width: "100%",
      },
    },
  }),
  {
    name: "Layout",
  },
);

const Layout: React.FC = props => {
  const { children } = props;

  const classes = useStyles(props);
  // const { themeType } = useTheme();

  return (
    <div className={classes.root}>
      <div className={classes.mainPanel}>
        <img
          className={classes.logo}
          src="https://avatars.githubusercontent.com/u/57796807?s=200&v=4"
        />
        <div className={classes.mainPanelContent}>{children}</div>
      </div>
      <div className={classes.sidebar}>
        <img
          className={classes.backgroundImg}
          src="https://media-exp1.licdn.com/dms/image/C561BAQFTaio1r_PXdg/company-background_10000/0/1594888793315?e=2147483647&v=beta&t=9MZsyoj8BaO9bMzOYJdkXgXvhtKU_RKMoGakmOzp80k"
        />
        {/* <InlineSVG className={classes.sidebarArt} src={backgroundArt} /> */}
      </div>
    </div>
  );
};

Layout.displayName = "Layout";
export default Layout;
