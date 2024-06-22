import * as api from '../api';

export const addPoints = (id) => async (dispatch) => {

  try {
    console.log('ID before API call:', id);
    const { data } = await api.points(id);
    console.log(data);
    dispatch({ type: 'ADD_POINTS', payload: data });
  } catch (error) {
    console.log(error);
  }
};