import { createReducer } from '@reduxjs/toolkit';
import { toggleMenu } from './Menu.actions';

const initState = {
  isCollapsed: false,
};

const MenuReducer = createReducer(initState, {
  [toggleMenu]: (state) => ({
    ...state,
    isCollapsed: !state.isCollapsed,
  }),
});

export default MenuReducer;
