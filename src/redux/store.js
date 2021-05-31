import { configureStore } from '@reduxjs/toolkit';
import MenuReducer from '../components/menu/redux/Menu.reducer';
import UsersReducer from '../routes/usersList/redux/Users.reducer';
import UserReducer from '../routes/userDetails/redux/User.reducer';

export default configureStore({
  reducer: {
    menu: MenuReducer,
    users: UsersReducer,
    user: UserReducer,
  },
});
