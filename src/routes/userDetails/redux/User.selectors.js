const UserSelectors = {
  user: (state) => state.user.data,
  isLoading: (state) => state.users.isLoading,
};

export default UserSelectors;
