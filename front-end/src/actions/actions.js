export const REGISTER_USER = "REGISTER_USER";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const UPDATE_CURRENT_USER = "UPDATE_CURRENT_USER";
export const ADD_NEW_CLASS = "ADD_NEW_CLASS";
export const UPDATE_CLASS = "UPDATE_CLASS";
export const DELETE_CLASS = "DELETE_CLASS";

export const registerUser = (data) => {
  return { type: REGISTER_USER, payload: data };
};

export const setCurrentUser = (data) => {
  return { type: SET_CURRENT_USER, payload: data };
};

export const updateCurrentUser = () => {
  return { type: UPDATE_CURRENT_USER };
};

export const addNewClass = (data) => {
  return { type: ADD_NEW_CLASS, payload: data };
};

export const updateClass = (data) => {
  return { type: UPDATE_CLASS, payload: data };
};

export const deleteClass = (data) => {
  return { type: DELETE_CLASS, payload: data };
};
