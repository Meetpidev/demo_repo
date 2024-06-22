

const pointsReducer = (state = { points: 0 }, action) => {
    switch (action.type) {
      case 'ADD_POINTS':
        return {...state, user: { ...state, points: action.payload.points }};
      default:
        return state;
    }
  };
  
  export default pointsReducer;
  