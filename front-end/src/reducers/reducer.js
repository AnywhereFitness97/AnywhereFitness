import { REGISTER_USER } from "../actions/actions.js";

const initialState = {
  newmember: {
    first_name: "",
    last_name: "",
    email: "",
  },
  username: "",
  password: "",
  auth_key: undefined,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        newmember: {
          first_name: action.payload.first_name,
          last_name: action.payload.last_name,
          email: action.payload.email,
        },
        username: action.payload.username,
        password: action.payload.password,
        auth_key: action.payload.auth_key,
      };
    default:
      return state;
  }
};
