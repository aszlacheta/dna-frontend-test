import React from 'react';
import { withTranslation } from 'react-i18next';
import { Button, Dropdown, Menu } from 'antd';
import { MoreOutlined } from '@ant-design/icons';

function UsersListContextMenu({ t, onDetailsOpen }) {
  const contextMenu = (
    <Menu>
      <Menu.Item onClick={onDetailsOpen}>
        {t('Users.ContextMenu.Details')}
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={contextMenu}>
      <Button icon={<MoreOutlined />} />
    </Dropdown>
  );
}

export default withTranslation()(UsersListContextMenu);
