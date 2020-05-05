import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Add from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto"
    },
    backgroundColor: "#ffb700",
    "&:hover": {
      backgroundColor: fade("#ffb700", 0.85)
    }
  }
}));

export default function FormDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Button
        className={classes.button}
        variant="contained"
        onClick={handleClickOpen}
        startIcon={<Add />}
      >
        Add Movie
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add a new movie</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the following detail
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Movie Title"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button
            className={classes.button}
            onClick={handleClose}
            variant="contained"
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
