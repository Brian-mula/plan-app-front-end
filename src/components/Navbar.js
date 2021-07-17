import {
  Drawer,
  makeStyles,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  AppBar,
  Toolbar,
  Button,
} from "@material-ui/core";
import React from "react";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import FolderOutlinedIcon from "@material-ui/icons/FolderOutlined";
import { format } from "date-fns";
import { useHistory } from "react-router-dom";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  appbar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  title: {
    flexGrow: 1,
  },
  btn: {
    margin: "10px",
  },
}));

function Navbar() {
  const classes = useStyles();
  const history = useHistory();
  const links = [
    {
      text: "create",
      path: "/create",
      icon: <CreateOutlinedIcon />,
    },
    {
      text: "projects",
      path: "/projects",
      icon: <FolderOutlinedIcon />,
    },
  ];
  return (
    <div>
      {/* app bar */}
      <AppBar className={classes.appbar}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            {format(new Date(), "do MMM Y")}
          </Typography>
          <Button
            color="inherit"
            onClick={() => history.push("/login")}
            className={classes.btn}
          >
            Login
          </Button>
          <Button
            color="inherit"
            onClick={() => history.push("/register")}
            className={classes.btn}
          >
            Register
          </Button>
        </Toolbar>
      </AppBar>

      {/* end of appbar */}
      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <Typography variant="h5">Fulfill Plans</Typography>
        <List>
          {links.map((link) => (
            <ListItem
              onClick={() => history.push(link.path)}
              button
              key={link.text}
            >
              <ListItemIcon>{link.icon}</ListItemIcon>
              <ListItemText>{link.text}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* end of side drawer */}
    </div>
  );
}

export default Navbar;
