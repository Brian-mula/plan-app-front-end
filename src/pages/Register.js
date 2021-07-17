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
    margin: 15,
  },
  avatarStyle: {
    backgroundColor: "#2196f3",
  },
  registerText: {
    margin: 30,
  },
  button: {
    backgroundColor: "#673ab7",
    margin: 20,
  },
}));

function Register() {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Paper className={classes.paperStyle}>
          <Grid align="center">
            <Avatar>
              <LockOutlinedIcon
                className={classes.avatarStyle}
                color="primary"
              />
            </Avatar>
            <Typography
              variant="h5"
              color="primary"
              className={classes.registerText}
            >
              Enter Credentials To register
            </Typography>
          </Grid>
          <TextField
            className={classes.textStyle}
            variant="outlined"
            placeholder="e.g Paul"
            label="Username"
            fullWidth
          />
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
            Register
          </Button>
        </Paper>
      </Grid>
    </div>
  );
}

export default Register;
