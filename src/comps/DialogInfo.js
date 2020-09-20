import React from "react";
import { connect } from "react-redux";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  DialogActions,
  Button,
  Box,
  Typography,
} from "@material-ui/core";
import { Facebook, Twitter, Github } from "mdi-material-ui";
import { setDialogInfo } from "../state/actions";

const DialogInfo = ({ dispatch, isOpen }) => {
  const handleClose = () => {
    dispatch(setDialogInfo(false));
  };

  const getYear = () => {
    const now = new Date();
    if (now.getFullYear() > 2020) {
      return ` - ${now.getFullYear()}`;
    }
    return ``;
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Heads or Tails?</DialogTitle>
      <DialogContent dividers>
        <Typography>
          Thank you for using '<strong>Heads or Tails?</strong>'. If you like
          it, please consider sharing it on your social media accounts and/or
          giving it a star on GitHub.
        </Typography>
        <Box my={2}>
          <Grid container spacing={2} justify="center">
            <Grid xs={12} md={6} item>
              <Button
                startIcon={<Facebook />}
                fullWidth
                onClick={() => {
                  window.open(
                    "https://www.facebook.com/sharer/sharer.php?u=https://dandroos.github.io/heads-or-tails",
                    "_blank"
                  );
                }}
              >
                Share on Facebook
              </Button>
            </Grid>
            <Grid xs={12} md={6} item>
              <Button
                startIcon={<Twitter />}
                fullWidth
                onClick={() =>
                  window.open(
                    "https://twitter.com/intent/tweet?text=Heads%20or%20Tails?&url=https://dandroos.github.io/heads-or-tails",
                    "_blank"
                  )
                }
              >
                Share on Twitter
              </Button>
            </Grid>
            <Grid xs={12} md={6} item>
              <Button
                startIcon={<Github />}
                fullWidth
                onClick={() =>
                  window.open(
                    "https://github.com/dandroos/heads-or-tails",
                    "_blank"
                  )
                }
              >
                Visit GitHub repo
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Typography display="block" align="center" variant="caption">
          All content &copy; 2020{getYear()} David Andrews
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="text" onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.dialogInfo,
});

export default connect(mapStateToProps)(DialogInfo);
