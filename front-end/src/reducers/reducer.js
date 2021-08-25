import randId from "../utils/randomIdGen";
import {
  REGISTER_USER,
  SET_CURRENT_USER,
  UPDATE_CURRENT_USER,
} from "../actions/actions.js";

const initialState = {
  users: [],
  currentUser: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        users: [
          ...state.users,
          {
            first_name: action.payload.first_name,
            last_name: action.payload.last_name,
            email: action.payload.email,
            username: action.payload.username,
            password: action.payload.password,
            auth_key: action.payload.auth_key,
            role: action.payload.role,
            id: randId(),
          },
        ],
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: state.users.find(
          (cur) =>
            cur.username === action.payload.username &&
            cur.password === action.payload.password
        ),
      };
    case UPDATE_CURRENT_USER:
      return {
        ...state,
        currentUser: state.users.find((cur) => cur.id === state.currentUser.id),
      };
    default:
      return state;
  }
};
