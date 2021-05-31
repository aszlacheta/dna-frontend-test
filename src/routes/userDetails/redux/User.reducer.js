import { createReducer } from '@reduxjs/toolkit';
import { getUserFailed, getUserRequested, getUserSucceeded } from '../../usersList/redux/Users.actions';

const initState = {
  data: {},
  isLoading: false,
};

const UserReducer = createReducer(initState, {
  [getUserRequested]: (state) => ({
    ...state,
    isLoading: true,
  }),
  [getUserSucceeded]: (state, action) => ({
    ...state,
    isLoading: false,
    data: action.payload.response,
  }),
  [getUserFailed]: (state) => ({
    ...state,
    isLoading: false,
  }),
});

export default UserReducer;
