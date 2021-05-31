import { createReducer } from '@reduxjs/toolkit';
import { getUsersRequested, getUsersSucceeded } from './Users.actions';

const initState = {
  data: [],
  isLoading: false,
  status: 0,
  statusText: '',
  page: 1,
  limit: 20,
  total: 0,
};

const UsersReducer = createReducer(initState, {
  [getUsersRequested]: (state) => ({
    ...state,
    isLoading: true,
  }),
  [getUsersSucceeded]: (state, action) => ({
    ...state,
    isLoading: false,
    data: action.payload.response.data,
    status: action.payload.response.status,
    statusText: action.payload.response.statusText,
    page: action.payload.page,
    limit: action.payload.limit,
    total: action.payload.total,
  }),
  [getUsersRequested]: (state) => ({
    ...state,
    isLoading: false,
  }),
});

export default UsersReducer;
