import React from "react";
import { makeStyles } from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  page: {
    width: "100%",
  },

  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
}));

function Layout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* appbar */}

      {/* end of appbar */}

      {/* sidebar */}
      <Navbar />
      {/* end of side bar */}
      <div className={classes.page}>
        <div className={classes.toolbar} />
        {children}
      </div>
    </div>
  );
}

export default Layout;
