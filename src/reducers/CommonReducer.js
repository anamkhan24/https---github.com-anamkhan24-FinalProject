const initialState = {
  breeds: [],
  favourites: [],
  product: [],
};

const CommonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BREEDS": {
      return { ...state, breeds: action.payload };
    }
    case "SET_FAVOURITES": {
      return { ...state, favourites: [...state.favourites, action.payload] };
    }
    case "DEL_FAVOURITES": {
      return { ...state, favourites: action.payload };
    }

    case "SET_PRODUCT": {
      return { ...state, details: action.payload };
    }

    default:
      return state;
  }
};
export default CommonReducer;
