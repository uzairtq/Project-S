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
    minWidth: 200,
    overflowY: "auto"
  },
  Pane_Paper_Right: {
    padding: 20,
    marginTop: 10,
    marginBotton: 10,
    height: 500
  },
  root: {
    flexGrow: 4
  }
};

export default ({
  movies,
  category,
  onSelect,
  movie: {
    id,
    title = "Welcome!",
    description = "Please Select a movie from the list on the left."
  }
}) => (
  <Grid container direction="row" justify="flex-start" alignItems="flex-start">
    <Grid item sm>
      <Paper style={styles.Pane_Paper_Left}>
        {movies.map(([group, movies]) =>
          !category || category === group ? (
            <Fragment key={group}>
              <Typography variant="h5">{group}</Typography>
              <List component="ul">
                {movies.map(({ id, title }) => (
                  <ListItem key={id} button onClick={() => onSelect(id)}>
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
        <Typography variant="h4">{title}</Typography>
        <Typography variant="subtitle1" style={{ marginTop: 20 }}>
          {description}
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);
