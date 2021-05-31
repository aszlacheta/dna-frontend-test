import { configureStore } from '@reduxjs/toolkit';
import MenuReducer from '../components/menu/redux/Menu.reducer';

export default configureStore({
  reducer: {
    menu: MenuReducer,
  },
});
