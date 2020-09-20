import {
  SET_IMAGES_LOADED,
  SET_DIALOG_INFO,
  SET_FONT_LOADED,
  SET_SITE_READY_TO_SHOW,
  SET_COIN_FACE,
  SET_COIN_TOSS_IN_PROGRESS,
} from "./types";

const initialState = {
  fontLoaded: false,
  imagesLoaded: false,
  siteReadyToShow: false,
  dialogInfo: false,
  coinFace: null,
  coinTossInProgress: false,
};

export default (state = initialState, { type, payload }) => {
  const newState = Object.assign({}, state);
  switch (type) {
    case SET_FONT_LOADED:
      newState.fontLoaded = payload;
      break;
    case SET_SITE_READY_TO_SHOW:
      newState.siteReadyToShow = payload;
      break;
    case SET_COIN_FACE:
      newState.coinFace = payload;
      break;
    case SET_COIN_TOSS_IN_PROGRESS:
      newState.coinTossInProgress = payload;
      break;
    case SET_IMAGES_LOADED:
      newState.imagesLoaded = payload;
      break;
    case SET_DIALOG_INFO:
      newState.dialogInfo = payload;
      break;
    default:
      break;
  }
  return newState;
};
