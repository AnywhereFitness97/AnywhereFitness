export const REGISTER_USER = "REGISTER_USER";

export const registerUser = (data) => {
  console.log("register");
  return { type: REGISTER_USER, payload: data };
};
