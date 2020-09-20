import { SET_IMAGES_LOADED, SET_DIALOG_INFO, SET_DIALOG_SHARE } from "./types";

const initialState = {
  imagesLoaded: false,
  dialogInfo: false,
  dialogShare: false,
};

export default (state = initialState, { type, payload }) => {
  const newState = Object.assign({}, state);
  switch (type) {
    case SET_IMAGES_LOADED:
      newState.imagesLoaded = payload;
      break;
    case SET_DIALOG_SHARE:
      newState.dialogShare = payload;
      break;
    case SET_DIALOG_INFO:
      newState.dialogInfo = payload;
      break;
    default:
      break;
  }
  return newState;
};
