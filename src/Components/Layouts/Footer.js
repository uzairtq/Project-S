import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Tabs, Tab } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  TabBar: {
    backgroundColor: "#ffb700"
  }
}));

export default function CenteredTabs({ genres, onSelect }) {
  const classes = useStyles();
  const [index, setIndex] = React.useState(0);

  const handleChange = (event, newIndex) => {
    setIndex(newIndex);
    onSelect(newIndex === 0 ? "" : genres[newIndex - 1]);
  };
  return (
    <Paper className={classes.root}>
      <Tabs
        className={classes.TabBar}
        value={index}
        onChange={handleChange}
        variant="scrollable"
        indicatorColor="primary"
        textColor="#000000"
      >
        <Tab label="All" />
        {genres.map(group => (
          <Tab label={group} />
        ))}
      </Tabs>
    </Paper>
  );
}
