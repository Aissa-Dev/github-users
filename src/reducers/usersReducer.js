const initialState = {
  users: [],
  isLoading: true
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return {
        ...state,
        users: action.payload.users,
        isLoading: false
      };
    default:
      return { ...state };
  }
};
