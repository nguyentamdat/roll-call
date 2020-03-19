import createDataContext from "./createDataContext";

const loginReducer = (state, action) => {
  switch (action.type) {
    case "change_email":
      return { ...state, email: action.payload };
    case "change_password":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

const changeEmail = dispatch => {
  return value => {
    dispatch({ type: "change_email", payload: value });
  };
};

const changePassword = dispatch => {
  return value => {
    dispatch({ type: "change_password", payload: value });
  };
};

export const { Context, Provider } = createDataContext(
  loginReducer,
  { changeEmail, changePassword },
  { email: "", password: "" }
);
