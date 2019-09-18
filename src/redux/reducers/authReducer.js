const initialState = {
  isAuthenticated: false,
  error: '',
  email: '',
  token: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GOT_TOKEN':
      console.log(action.data);// eslint-disable-line no-console
      return {
        ...state,
        isAuthenticated: true,
        email: action.data.email,
        token: action.data.token,
        error: '',
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        email: '',
        token: '',
        error: '',
      };
    case 'AUTH_ERROR':
      return {
        ...state,
        isAuthenticated: false,
        email: '',
        token: '',
        error: action.error.message,
      };
    default:
      return state;
  }
};

export default reducer;
