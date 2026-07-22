import { SET_THEME, TOGGLE_THEME } from "../actionTypes";

export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});

export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});
