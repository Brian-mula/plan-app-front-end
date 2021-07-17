import { Container, Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import projects from "../components/Dummydata";
import ProjectCards from "../components/ProjectCards";

const useStyles = makeStyles((theme) => ({
  head2: {
    margin: "20px auto",
  },
}));

function Project() {
  const classes = useStyles();
  return (
    <Container>
      <div>
        <h2 className={classes.head2}>Here are your plans Brian</h2>
        <Grid container spacing={2}>
          {projects.map((project) => (
            <Grid item key={project.id} xs={12} md={3}>
              <Paper>
                <ProjectCards project={project} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
}

export default Project;
