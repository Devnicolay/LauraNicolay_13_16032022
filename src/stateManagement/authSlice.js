const initialState = {
  user: null,
  isError: false,
  isLoggedIn: false,
  message: "",
  token: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_TOKEN":
      return {
        ...state,
        token: action.payload,
        isLoggedIn: true,
      };
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
