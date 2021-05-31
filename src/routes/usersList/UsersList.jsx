import React, { useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import UsersListSelectors from './redux/UsersList.selectors';
import { getUsers } from './redux/UsersList.actions';
import UsersListContextMenu from './UsersListContextMenu';

import './UsersList.less';

/**
 * Component used to render users table
 * @param t
 * @returns {JSX.Element}
 * @constructor
 */
function UsersList({ t }) {
  const dispatch = useDispatch();
  const data = useSelector(UsersListSelectors.data);
  const isLoading = useSelector(UsersListSelectors.isLoading);
  const page = useSelector(UsersListSelectors.page);
  const limit = useSelector(UsersListSelectors.limit);
  const total = useSelector(UsersListSelectors.total);
  const pagination = {
    current: page,
    pageSize: limit,
    total,
  };

  useEffect(() => {
    dispatch(getUsers(page, limit));
  }, []);

  const columns = [
    {
      title: t('Users.Name'),
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: t('Users.Username'),
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: t('Users.Email'),
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: t('Users.Actions'),
      dataIndex: 'actions',
      key: 'actions',
      render: () => (
        <UsersListContextMenu />
      ),
    },
  ];

  const onChange = (paginationConfig) => {
    const pageIndex = paginationConfig.current;
    const limitNumber = paginationConfig.pageSize;

    dispatch(getUsers(pageIndex, limitNumber));
  };

  return (
    <Table
      className="users-list-table padding-around"
      dataSource={data}
      columns={columns}
      pagination={pagination}
      loading={isLoading}
      onChange={onChange}
    />
  );
}

export default withTranslation()(UsersList);
