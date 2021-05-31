import React, { useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import UsersSelectors from './redux/Users.selectors';
import { getUsers } from './redux/Users.actions';
import UsersListContextMenu from './UsersListContextMenu';

import './UsersList.less';

export const ENCODED_DOT = '_dot_';

/**
 * Component used to render users table
 * @param t
 * @returns {JSX.Element}
 * @constructor
 */
function UsersList({ t }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const data = useSelector(UsersSelectors.data);
  const isLoading = useSelector(UsersSelectors.isLoading);
  const page = useSelector(UsersSelectors.page);
  const limit = useSelector(UsersSelectors.limit);
  const total = useSelector(UsersSelectors.total);
  const pagination = {
    current: page,
    pageSize: limit,
    total,
  };

  useEffect(() => {
    dispatch(getUsers(page, limit));
  }, []);

  const onRowClick = (email) => {
    history.push(`/users/${email}`);
  };

  const renderCell = (text, row) => {
    const encodedEmail = encodeURIComponent(row.email.replace(/\./ig, ENCODED_DOT));

    return (
      <div onClick={() => onRowClick(encodedEmail)} className="clickable-cell">
        {text}
      </div>
    );
  };

  const columns = [
    {
      title: t('Users.Name'),
      dataIndex: 'name',
      key: 'name',
      className: 'clickable-cell-container',
      render: renderCell,
    },
    {
      title: t('Users.Username'),
      dataIndex: 'username',
      key: 'username',
      className: 'clickable-cell-container',
      render: renderCell,
    },
    {
      title: t('Users.Email'),
      dataIndex: 'email',
      key: 'email',
      className: 'clickable-cell-container',
      render: renderCell,
    },
    {
      title: t('Users.Actions'),
      dataIndex: 'actions',
      key: 'actions',
      render: () => (
        <UsersListContextMenu onDetailsOpen={onRowClick} />
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
