const initialState = {
  users: [],
  searched: [],
  isLoading: true,
  isSearched: false
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return {
        ...state,
        users: action.payload.users,
        isLoading: false
      };
    case "FETCH_NAMES":
      return {
        ...state,
        // searched: action.payload.searched.items,
        users: action.payload.searched.items,
        isSearched: true
      };
    default:
      return { ...state };
  }
};
