import { SET_IMAGES_LOADED, SET_DIALOG_INFO, SET_DIALOG_SHARE } from "./types";

export const setImagesLoaded = (payload) => ({
  type: SET_IMAGES_LOADED,
  payload,
});

export const setDialogShare = (payload) => ({
  type: SET_DIALOG_SHARE,
  payload,
});

export const setDialogInfo = (payload) => ({
  type: SET_DIALOG_INFO,
  payload,
});
