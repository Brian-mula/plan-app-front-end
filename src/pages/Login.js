import {
  Avatar,
  Grid,
  makeStyles,
  Paper,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import React from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const useStyles = makeStyles((theme) => ({
  paperStyle: {
    width: "400px",
    padding: 20,
    marginLeft: 650,
    height: "80vh",
    marginTop: 10,
  },
  textStyle: {
    margin: 20,
  },
  avatarStyle: {
    background: "#2196f3",
  },
  loginText: {
    margin: 30,
  },
  button: {
    backgroundColor: "#673ab7",
    margin: 20,
  },
}));

function Login() {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Paper className={classes.paperStyle}>
          <Grid align="center">
            <Avatar>
              <LockOutlinedIcon className={classes.avatarStyle} />
            </Avatar>
            <Typography
              variant="h5"
              color="primary"
              className={classes.loginText}
            >
              Enter Credentials To Login
            </Typography>
          </Grid>
          <TextField
            className={classes.textStyle}
            variant="outlined"
            placeholder="e.g abc@abc.com"
            label="Email"
            fullWidth
          />
          <TextField
            className={classes.textStyle}
            variant="outlined"
            placeholder="e.g 123456"
            label="Password"
            fullWidth
          />
          <Button type="submit" fullWidth className={classes.button}>
            {" "}
            Login
          </Button>
        </Paper>
      </Grid>
    </div>
  );
}

export default Login;
