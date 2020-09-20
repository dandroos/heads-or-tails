import {
  SET_IMAGES_LOADED,
  SET_DIALOG_INFO,
  SET_FONT_LOADED,
  SET_SITE_READY_TO_SHOW,
  SET_COIN_FACE,
  SET_COIN_TOSS_IN_PROGRESS,
} from "./types";

export const setFontLoaded = (payload) => ({
  type: SET_FONT_LOADED,
  payload,
});

export const setSiteReadyToShow = (payload) => ({
  type: SET_SITE_READY_TO_SHOW,
  payload,
});

export const setCoinFace = (payload) => ({
  type: SET_COIN_FACE,
  payload,
});

export const setCoinTossInProgress = (payload) => ({
  type: SET_COIN_TOSS_IN_PROGRESS,
  payload,
});

export const setImagesLoaded = (payload) => ({
  type: SET_IMAGES_LOADED,
  payload,
});

export const setDialogInfo = (payload) => ({
  type: SET_DIALOG_INFO,
  payload,
});
