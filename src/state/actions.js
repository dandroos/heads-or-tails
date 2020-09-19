import { SET_TOSS_IN_PROGRESS, SET_FONT_LOADED } from "./types";

export const setFontLoaded = (payload) => ({
  type: SET_FONT_LOADED,
  payload,
});

export const setTossInProgress = (payload) => ({
  type: SET_TOSS_IN_PROGRESS,
  payload,
});
