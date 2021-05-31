import { configureStore } from '@reduxjs/toolkit';
import MenuReducer from '../components/menu/redux/Menu.reducer';
import UsersReducer from '../routes/usersList/redux/UsersList.reducer';

export default configureStore({
  reducer: {
    menu: MenuReducer,
    users: UsersReducer,
  },
});
