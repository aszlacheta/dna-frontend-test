import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUserRequested = createAction('GET_USER_REQUESTED');
export const getUserSucceeded = createAction('GET_USER_SUCCEEDED');
export const getUserFailed = createAction('GET_USER_FAILED');

export const getUser = (username) => (dispatch) => {
  dispatch(getUserRequested());

  axios.get(`${process.env.BACKEND_URL}/users`, {
    params: {
      username,
    },
  })
    .then((response) => {
      dispatch(getUserSucceeded({
        response,
      }));
    })
    .catch((error) => {
      dispatch(getUserFailed(error));
    });
};
