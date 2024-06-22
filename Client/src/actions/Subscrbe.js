import * as api from '../api';

export const subscribeToChannel = (videoChanel, userId) => async (dispatch) => {
  try {
    const { data } = await api.subscribeToChannel(videoChanel, userId);
    dispatch({ type: 'SUBSCRIBE_CHANNEL', payload: data });
  } catch (error) {
    console.error('Error subscribing to channel:', error);
  }
};

export const getSubscriptions = (userId) => async (dispatch) => {
  try {
    const { data } = await api.getSubscriptions(userId);
    dispatch({ type: 'FETCH_SUBSCRIPTIONS', payload: data });
  } catch (error) {
    console.error('Error fetching subscriptions:', error);
  }
};
