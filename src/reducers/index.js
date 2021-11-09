const initialState = {
  isFavourite: false,
  favourites: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "IS_FAVOURITE":
      return {
        ...state,
        favourites: action.payload,
      };
    case "FAVOURITES":
      return {
        ...state,
        favourites: action.payload,
      };
    default:
      return state;
  }
}

export { initialState, reducer };
