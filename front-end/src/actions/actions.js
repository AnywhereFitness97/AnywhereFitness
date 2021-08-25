export const REGISTER_USER = "REGISTER_USER";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const UPDATE_CURRENT_USER = "UPDATE_CURRENT_USER";

export const registerUser = (data) => {
  return { type: REGISTER_USER, payload: data };
};

export const setCurrentUser = (data) => {
  return { type: SET_CURRENT_USER, payload: data };
};

export const updateCurrentUser = () => {
  return { type: UPDATE_CURRENT_USER };
};
