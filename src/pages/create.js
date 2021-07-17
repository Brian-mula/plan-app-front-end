import React from "react";
import {
  Avatar,
  Button,
  Grid,
  makeStyles,
  Paper,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paperStyle: {
    width: "400px",
    padding: 20,
    height: "80vh",
    marginLeft: "650px",
  },
  textfield: {
    margin: 18,
  },
  btn: {
    backgroundColor: "#9c27b0",
    margin: 18,
  },
}));
function Create() {
  const classes = useStyles();
  return (
    <div>
      <Grid>
        <Paper className={classes.paperStyle} elevation={3}>
          <Grid align="center">
            <Avatar>R</Avatar>
            <h2>Create Your Plan</h2>

            <TextField
              className={classes.textfield}
              label="Project Name"
              placeholder="e.g project"
              fullWidth
              variant="outlined"
            />
            <TextField
              className={classes.textfield}
              label="Project Value"
              placeholder="e.g 4000"
              fullWidth
              variant="outlined"
              type="number"
            />
            <TextField
              className={classes.textfield}
              label="Project Duration"
              placeholder="e.g 30 days"
              fullWidth
              variant="outlined"
            />
            <Button className={classes.btn} type="submit" fullWidth>
              Add Plan
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

export default Create;
