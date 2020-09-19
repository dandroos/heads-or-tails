import { SET_TOSS_IN_PROGRESS, SET_FONT_LOADED } from "./types";

const initialState = {
  fontLoaded: false,
  tossInProgress: false,
};

export default (state = initialState, { type, payload }) => {
  const newState = Object.assign({}, state);

  switch (type) {
    case SET_FONT_LOADED:
      newState.fontLoaded = payload;
      break;
    case SET_TOSS_IN_PROGRESS:
      newState.tossInProgress = payload;
      break;
    default:
      break;
  }

  return newState;
};
