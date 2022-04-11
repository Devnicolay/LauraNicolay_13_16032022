/**
 * Initial state
 */
const initialState = {
  user: null,
  isLoggedIn: false,
  token: null,
};

/**
 *
 * @param {object} state initial state
 * @param {object} action return to reducer how change state
 * @returns
 */
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        token: action.payload,
        isLoggedIn: true,
      };
    case "USER_DATA":
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
