import React, { Fragment } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

const styles = {
  Pane_Paper_Left: {
    padding: 20,
    marginTop: 10,
    marginBotton: 10,
    height: 500,
    width: 240,
    overflowY: "auto"
  },
  Pane_Paper_Right: {
    padding: 20,
    marginTop: 10,
    marginBotton: 10,
    height: 500
  },
  root: {
    flexGrow: 1
  }
};

export default ({ movies, category }) => (
  <Grid container direction="row" justify="flex-start" alignItems="flex-start">
    <Grid item sm>
      <Paper style={styles.Pane_Paper_Left}>
        {movies.map(([group, movies]) =>
          !category || category === group ? (
            <Fragment>
              <Typography variant="h5">{group}</Typography>
              <List component="ul">
                {movies.map(({ title }) => (
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                ))}
              </List>
            </Fragment>
          ) : null
        )}
      </Paper>
    </Grid>
    <Grid item sm style={styles.root}>
      <Paper style={styles.Pane_Paper_Right}>
        <Typography variant="h4">Welcome!</Typography>
        <Typography variant="subtitle1" style={{ marginTop: 20 }}>
          Please Select a movie from the list on the left.
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);
