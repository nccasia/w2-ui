import logo from "@assets/logo.png";
import { makeStyles } from "@saleor/macaw-ui";
import React from "react";

const useStyles = makeStyles(
  theme => ({
    logo: {
      height: "36px",
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
      backgroundPosition: "60% 50%",
      background:
        "no-repeat url('https://media-exp1.licdn.com/dms/image/C561BAQFTaio1r_PXdg/company-background_10000/0/1594888793315?e=2147483647&v=beta&t=9MZsyoj8BaO9bMzOYJdkXgXvhtKU_RKMoGakmOzp80k')",
    },
    sidebar: {
      [theme.breakpoints.up("lg")]: {
        alignItems: "center",
        display: "flex",
      },
    },
    backgroundImg: {
      height: "100%",
      width: "100%",
      objectFit: "cover",
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

  return (
    <div className={classes.root}>
      <div className={classes.mainPanel}>
        <div>
          <img className={classes.logo} src={logo} />
        </div>
        <div className={classes.mainPanelContent}>{children}</div>
      </div>
      <div className={classes.sidebar}>
        {/* <img className={classes.backgroundImg} src='https://media-exp1.licdn.com/dms/image/C561BAQFTaio1r_PXdg/company-background_10000/0/1594888793315?e=2147483647&v=beta&t=9MZsyoj8BaO9bMzOYJdkXgXvhtKU_RKMoGakmOzp80k'/> */}
      </div>
    </div>
  );
};

Layout.displayName = "Layout";
export default Layout;
