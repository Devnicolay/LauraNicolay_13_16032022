const initialState = {
  user: null,
  isLoggedIn: false,
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
    case "EDIT_NAME":
      return {
        ...state,
        user: {
          ...state.user,
          body: {
            ...state.user.body,
            firstName: action.payload.firstname,
            lastName: action.payload.lastname,
          },
        },
      };
    default:
      return state;
  }
};
