import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUserRequested = createAction('GET_USER_REQUESTED');
export const getUserSucceeded = createAction('GET_USER_SUCCEEDED');
export const getUserFailed = createAction('GET_USER_FAILED');

export const getUser = (email) => (dispatch) => {
  dispatch(getUserRequested());

  axios.get(`${process.env.BACKEND_URL}/users`, {
    params: {
      email,
    },
  })
    .then((response) => {
      dispatch(getUserSucceeded(response.data && response.data[0]));
    })
    .catch((error) => {
      dispatch(getUserFailed(error));
    });
};
