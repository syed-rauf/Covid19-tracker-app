export const reducerFunction = (state, action) => {
  switch (action.type) {
    case "COUNTRIES": {
      return {
        ...state,
        countries: action.payload,
      };
    }
    case "STATISTICS": {
      return {
        ...state,
        statistics: action.payload,
      };
    }
    case "CURRENT_COUNTRY": {
      return {
        ...state,
        current_country: action.payload,
      };
    }
    default:
      return state;
  }
};
