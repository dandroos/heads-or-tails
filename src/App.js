import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Box,
  Container,
  Typography,
  Button,
  Fab,
  Grow,
  Slide,
} from "@material-ui/core";
import FontFaceObserver from "fontfaceobserver";
import Sound from "react-sound";
import CoinTossSound from "./assets/sounds/coinflip.mp3";
import Heads from "./assets/images/heads.png";
import Tails from "./assets/images/tails.png";
import { InformationVariant } from "mdi-material-ui";
import DialogInfo from "./comps/DialogInfo";
import {
  setDialogInfo,
  setImagesLoaded,
  setCoinTossInProgress,
  setFontLoaded,
  setSiteReadyToShow,
  setCoinFace,
} from "./state/actions";

function App({
  dispatch,
  imagesLoaded,
  fontLoaded,
  coinTossInProgress,
  siteReadyToShow,
  coinFace,
}) {
  const [soundStatus, setSoundStatus] = useState(Sound.status.STOPPED);

  useEffect(() => {
    window.soundManager.setup({ debugMode: false });

    const preloadImage = (img) => {
      return new Promise((res, rej) => {
        const imgToLoad = new Image();
        imgToLoad.src = img;
        imgToLoad.onload = res();
      });
    };

    preloadImage(Heads).then(() =>
      preloadImage(Tails).then(() => dispatch(setImagesLoaded(true)))
    );

    const loadFont = () => {
      const font = new FontFaceObserver("Playfair Display");
      font
        .load()
        .then(() => dispatch(setFontLoaded(true)))
        .catch(() => {
          console.log("There was an error loading the font");
          loadFont();
        });
    };
    loadFont();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (fontLoaded && imagesLoaded) {
      dispatch(setSiteReadyToShow(true));
    }
    //eslint-disable-next-line
  }, [fontLoaded, imagesLoaded]);

  const handleClick = () => {
    dispatch(setCoinTossInProgress(true));
    setSoundStatus(Sound.status.PLAYING);
  };

  const handleFinishSound = () => {
    setSoundStatus(Sound.status.STOPPED);
    const headsOrTails = Math.round(Math.random());

    if (headsOrTails === 0) {
      dispatch(setCoinFace("tails"));
    } else {
      dispatch(setCoinFace("heads"));
    }
    dispatch(setCoinTossInProgress(false));
  };

  return (
    <Grow in={siteReadyToShow}>
      <Box
        display="flex"
        minHeight="100vh"
        align="center"
        alignItems="center"
        justifyContent="center"
      >
        <Container>
          <Box
            width={300}
            height={300}
            maxWidth="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Slide
              in={!coinTossInProgress}
              direction="down"
              timeout={{ enter: 20, exit: 60 }}
            >
              <img
                src={coinFace === "tails" ? Tails : Heads}
                alt="coin"
                style={{ maxWidth: "100%" }}
              />
            </Slide>
          </Box>
          <Box mt={2}>
            <Typography variant="h2" variantMapping={{ h2: "h1" }}>
              Heads or Tails?
            </Typography>
            <Typography variant="subtitle1" paragraph>
              A useful app for those times when you don't have a coin handy!
            </Typography>
            <Button disabled={coinTossInProgress} onClick={handleClick}>
              Toss coin
            </Button>
          </Box>
        </Container>
        <Sound
          autoLoad
          url={CoinTossSound}
          playStatus={soundStatus}
          onFinishedPlaying={handleFinishSound}
        />
        <Fab
          color="inherit"
          size="small"
          style={{ position: "fixed", top: 10, right: 10 }}
          onClick={() => dispatch(setDialogInfo(true))}
        >
          <InformationVariant />
        </Fab>
        <DialogInfo />
      </Box>
    </Grow>
  );
}

const mapStateToProps = (state) => ({
  infoIsOpen: state.dialogInfo,
  imagesLoaded: state.imagesLoaded,
  fontLoaded: state.fontLoaded,
  siteReadyToShow: state.siteReadyToShow,
  coinTossInProgress: state.coinTossInProgress,
  coinFace: state.coinFace,
});

export default connect(mapStateToProps)(App);
