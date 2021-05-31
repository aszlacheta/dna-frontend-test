import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUsersRequested = createAction('GET_USERS_REQUESTED');
export const getUsersSucceeded = createAction('GET_USERS_SUCCEEDED');
export const getUsersFailed = createAction('GET_USERS_FAILED');

export const getUsers = (page, limit) => (dispatch) => {
  dispatch(getUsersRequested());

  axios.get(`${process.env.BACKEND_URL}/users`, {
    params: {
      _page: page,
      _limit: limit,
    },
  })
    .then((response) => {
      dispatch(getUsersSucceeded({
        response,
        page,
        limit,
        total: response.headers['x-total-count'],
      }));
    })
    .catch((error) => {
      dispatch(getUsersFailed(error));
    });
};
