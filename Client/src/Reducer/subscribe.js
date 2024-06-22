const subscriptionReducer = (state = [], action) => {
    switch (action.type) {
      case 'SUBSCRIBE_CHANNEL':
        return [...state, action.payload];
      case 'FETCH_SUBSCRIPTIONS':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default subscriptionReducer;
  