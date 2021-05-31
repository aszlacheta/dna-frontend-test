const UsersListSelectors = {
  data: (state) => state.users.data,
  isLoading: (state) => state.users.isLoading,
  page: (state) => state.users.page,
  limit: (state) => state.users.limit,
  total: (state) => state.users.total,
};

export default UsersListSelectors;
